<template>
  <div class="koma-uploader">
    {{fileList}}
    <div @click="onClickUpload" ref="trigger">
      <slot></slot>
    </div>
    <div ref="temp" style="display: none;"></div>
    <ol>
      <li v-for="file in fileList" :key="file.name">
        <template v-if="file.status === 'uploading'">
          菊花
        </template>
        <img :src="file.url" width="100" height="100" alt="">
        {{file.name}}
        <button @click="onRemoveFile(file)">删除</button>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'KomaUploader',
  components: {},
  props: {
    name: {
      type: String,
      required: true
    },
    action: {
      type: String,
      required: true
    },
    method: {
      type: String,
      default: 'POST'
    },
    parseResponse: {
      type: Function,
      required: true
    },
    fileList:{
      type: Array,
      default: ()=>[]
    }
  },
  data() {
    return {
      imgUrl: ''
    };
  },
  methods: {
    onRemoveFile(file){
      let answer = window.confirm('确定删除该文件吗？')
      if(answer){
        let copy = [...this.fileList]
        let index = this.fileList.indexOf(file)
        copy.splice(index, 1)   // 这个返回的结果是删除的那个
        this.$emit('update:fileList', copy)
      }
    },
    onClickUpload(){
      // create input
      let input = this.createInput()
      // listen to input
      input.addEventListener('change', ()=>{
        let rawFile = input.files[0]
        this.uploadFile(rawFile)
        input.remove()
      })
      input.click()
    },
    beforeUploadFile(file, newName, url){
      let {type, size} = file
      this.$emit('update:fileList', [...this.fileList, {name: newName, type, size, status: 'uploading'}])
    },
    afterUploadFile(newName, url){
      // 找到上传成功之前的那个file，更新它的状态
      let copyFileList = JSON.parse(JSON.stringify(this.fileList))
      copyFileList.some((i)=>{
        if(i.name === newName){
          i.url = url
          i.status = 'success'
          return true;
        }
      })
      this.$emit('update:fileList', copyFileList)
    },
    generateName(name){
      while(this.fileList.filter(f=> f.name === name).length > 0) {
        let dotIndex = name.lastIndexOf('.')
        let nameWithoutExtension = name.substring(0, dotIndex)
        let extension = name.substring(dotIndex)
        name = nameWithoutExtension + '(1)' + extension
      }
      return name;
    },
    uploadFile(rawFile){
      let {name, type, size} = rawFile
      let newName = this.generateName(name)
      // 在真正上传成功之前将上传的文件改为loading状态
      this.beforeUploadFile(rawFile, newName)
      let formData = new FormData()
      formData.append(this.name, rawFile)
      this.doUploadFile(formData, (res)=>{
        this.imgUrl = this.parseResponse(res)
        this.afterUploadFile(newName, this.imgUrl)
      })
    },
    doUploadFile(formData, success) {
      let xhr = new XMLHttpRequest()
      xhr.open(this.method, this.action)
      xhr.onload = () => {
        // const res = JSON.parse(xhr.response)   // 反序列化, 将服务端返回的字符串转成对象, 现在将序列化步骤交给使用者
        success(xhr.response)
      }
      xhr.send(formData)
    },
    createInput(){
      let input = document.createElement('input')
      input.type = 'file'
      this.$refs.temp.appendChild(input)
      return input;
    },
  },
};
</script>
<style lang='less' scoped>
.koma-uploader {
}
</style>
