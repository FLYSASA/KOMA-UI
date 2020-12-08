<template>
  <div class="koma-uploader">
    <div @click="onClickUpload" ref="trigger">
      <slot></slot>
    </div>
    <div ref="temp" style="display: none;"></div>
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
    }
  },
  data() {
    return {

    };
  },
  methods: {
    onClickUpload(){
      let input = document.createElement('input')
      input.type = 'file'
      this.$refs.temp.appendChild(input)
      input.addEventListener('change', ()=>{
        console.log(input.files[0])
        let file = input.files[0]
        input.remove()
        
        let formData = new FormData()
        formData.append(this.name, file)

        let xhr = new XMLHttpRequest()
        xhr.open(this.method, this.action)
        xhr.onload = function(){
          console.log(xhr.response)
        }
        xhr.send(formData)
      })
      input.click()
    },
  },
};
</script>
<style lang='less' scoped>
.koma-uploader {
}
</style>
