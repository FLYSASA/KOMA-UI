<template>
  <div id="app">
    <div style="margin: 20px">
      <g-upload accept="image/*"
        :file-list.sync="fileList"
        :parseResponse="parseResponse" 
        action="http://127.0.0.1:3000/upload"
        name="file">
        <button>上传</button>
        <template slot="tips">
          <div>只能上传 300kb 以内的png、jpeg文件</div>
        </template>
      </g-upload>
      <button>保存</button>
    </div>
  </div>
</template>

<script>
import GUpload from '@/components/uploader/uploader';

export default {
  name: 'ButtonDemo',
  components: {
    GUpload
  },
  props: {},
  data () {
    return {
      fileList: []
    };
  },
  watch: {
    fileList(val){
      console.log(val)
    }
  },
  methods: {
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