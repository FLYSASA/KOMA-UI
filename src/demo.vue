<template>
  <div id="app">
    {{error}}
    <div style="margin: 20px">
      <g-upload accept="image/*"
        :file-list.sync="fileList"
        :parseResponse="parseResponse" 
        action="http://127.0.0.1:3000/upload"
        @error="error = $event"
        :sizeLimit="1"
        name="file">
        <g-button icon="upload">上传</g-button>
      </g-upload>
    </div>
  </div>
</template>

<script>
import GButton from '@/components/button/button';
import GUpload from '@/components/uploader/uploader';

export default {
  name: 'ButtonDemo',
  components: {
    GUpload,
    GButton
  },
  props: {},
  data () {
    return {
      fileList: [],
      error: ''
    };
  },
  watch: {
    fileList(val){
      console.log(val)
    }
  },
  methods: {
    onerror(error){
      alert(error)
    },
    parseResponse(res){
      let url = `http://127.0.0.1:3000/preview/${JSON.parse(res).id}`
      return url;
    },
  },
}

</script>
<style lang="less">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul, li {
    list-style: none;
  }
  #app {
    margin: 20px;
  }

</style>