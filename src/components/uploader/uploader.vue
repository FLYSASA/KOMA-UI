<template>
  <div class="koma-uploader">
    <div @click="onClickUpload" ref="trigger">
      <slot></slot>
    </div>
    <slot name="tips"></slot>
    <div ref="temp" style="display: none;"></div>
    <ol class="koma-uploader-fileList">
      <li v-for="file in fileList" :key="file.name">
        <template v-if="file.status === 'uploading'">
          <k-icon name="loading" class="loading-icon"></k-icon>
        </template>
        <div class="image-wrapper">
          <!-- type: "image/png" -->
          <template v-if="file.type.indexOf('image') === 0">
            <k-icon v-if="!file.url" name="file" class="file-icon"></k-icon>
            <img v-else :src="file.url" width="32" height="32" alt="">
          </template>
          <template v-else>
            <div class="koma-uploader-defaultImage"></div>
          </template>
        </div>
        <span class="file-name" :class="{[file.status]: file.status}" >{{file.name}}</span>
        <k-icon name="delete" class="delete-btn" @click="onRemoveFile(file)"></k-icon>
      </li>
    </ol>
  </div>
</template>

<script>
import http from '../defs/http'
import KIcon from '../icon'
export default {
  name: 'KomaUploader',
  components: {
    KIcon
  },
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
    },
    // 文件大小限制
    sizeLimit: {
      type: Number,
    },
    // 接收文件类型
    accept: {
      type: String,
      default: '*'
    },
    // 是否支持多选
    multiple: {
      type: Boolean,
      default: false
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
    // 点击上传
    onClickUpload(){
      // create input
      let input = this.createInput()
      // listen to input
      input.addEventListener('change', (e)=>{
        // 将之前的单文件改为多文件上传处理
        let rawFiles = input.files
        this.uploadFile(rawFiles)
        input.remove()
      })
      input.click()
    },
    // 上传前
    // rawFiles 注意这里的这个是个文件对象需要转一下
    beforeUploadFile(rawFiles, newNames){
      rawFiles = Array.from(rawFiles)
      for(let i=0; i<rawFiles.length; i++){
        let {type, size} = rawFiles[i]
        if(size > this.sizeLimit){
          this.$emit('error', '文件大于2MB')
          return false;
        }
      }
      // 所以这一步主要为了加上newName和status
      let arr = rawFiles.map((rawFile, index)=> {
        return {
          name: newNames[index], 
          type: rawFile.type, 
          size: rawFile.size, 
          status: 'uploading'
        }})
      this.$emit('update:fileList', [...this.fileList, ...arr])
      return true;
    },
    // 上传成功后
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
      this.$emit('uploaded')
    },
    // 上传失败
    uploadError(newName, xhr){
      let copyFileList = JSON.parse(JSON.stringify(this.fileList))
      copyFileList.some((i)=>{
        if(i.name === newName){
          i.status = 'fail'
          return true;
        }
      })
      this.$emit('update:fileList', copyFileList)
      let error = ''
      if(xhr.status === 0) {
        error = '网络无法连接'
      }
      this.$emit('error', error)
    },
    uploadFile(rawFiles){
      let newNames = []
      for(let i=0; i<rawFiles.length; i++){
        let rawFile = rawFiles[i]
        let {name} = rawFile
        let newName = this.generateName(name)
        // 不改变真实的rawFiles， 将新的name用数组存起来
        newNames[i] = newName
      }
      // 在真正上传成功之前将上传的文件改为loading状态
      if(!this.beforeUploadFile(rawFiles, newNames)){ return };
      for(let i=0; i<rawFiles.length; i++){
        let rawFile = rawFiles[i]
        let {name, type, size} = rawFile
        let newName = newNames[i]

        let formData = new FormData()
        formData.append(this.name, rawFile)
        this.doUploadFile(formData, 
          // success
          (res)=>{
            this.imgUrl = this.parseResponse(res)
            
            this.afterUploadFile(newName, this.imgUrl)
          }, 
          // error
          (xhr)=>{
            this.uploadError(newName, xhr)
          }
        )
      }
    },
    // 上传中
    doUploadFile(formData, success, fail) {
      http[this.method.toLowerCase()](this.action, { success, fail, formData })
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
    createInput(){
      this.$refs.temp.innerHTML = ''
      let input = document.createElement('input')
      input.type = 'file'
      input.accept = this.accept
      input.multiple = this.multiple
      this.$refs.temp.appendChild(input)
      return input;
    },
  },
};
</script>
<style lang='less' scoped>
@import '../../css/_var';
.koma-uploader {
  &-fileList {
    > li {
      display: flex;
      align-items: center;
      // border: 1px solid @darken-gray;
      margin: 8px 0;
    }
  }
  &-defaultImage{
    width: 24px;
    height: 24px;
    border: 1px solid @darken-gray;
  }
  .image-wrapper {
    display: inline-flex;
    margin-right: 8px;
    .file-icon {
      fill: @light-color;
    }
  }
  .file-name {
    &.success {
      color: green;
    }
    &.fail {
      color: red;
    }
  }
  .delete-btn{
    cursor: pointer;
    fill: @color;
    margin-left: auto;
    margin-right: 4px;
  }
}
</style>
