<template>
  <div class="koma-uploader">
    <div @click="onClickUpload" ref="trigger">
      <slot></slot>
    </div>
    <div ref="temp" style="display: none;"></div>
    <!-- <img :src="imgUrl"/> -->
    <ol>
      <li v-for="file in fileList" :key="file.name">
        <img :src="file.url" width="100" height="100" alt="">
        {{file.name}}
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
    onClickUpload(){
      // create input
      let input = this.createInput()
      // listen to input
      input.addEventListener('change', ()=>{
        let file = input.files[0]
        this.uploadFile(file)
        input.remove()
      })
      input.click()
    },
    uploadFile(file){
      let formData = new FormData()
      formData.append(this.name, file)
      let {name, type, size} = file
      this.doneUploadFile(formData, (res)=>{
        this.imgUrl = this.parseResponse(res)

        while(this.fileList.filter(f=> f.name === name).length > 0) {
          let dotIndex = name.lastIndexOf('.')
          let nameWithoutExtension = name.substring(0, dotIndex)
          let extension = name.substring(dotIndex)
          name = nameWithoutExtension + '(1)' + extension
        }
        this.$emit('update:fileList', [...this.fileList, {name, type, size, url: this.imgUrl}])
      })
    },
    doneUploadFile(formData, success) {
      let xhr = new XMLHttpRequest()
      xhr.open(this.method, this.action)
      xhr.onload = () => {
        success(xhr.response)
        // const res = JSON.parse(xhr.response)   // 反序列化, 将服务端返回的字符串转成对象, 现在将序列化步骤交给使用者
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
