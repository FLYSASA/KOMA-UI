<template>
  <div id="app">
    <div style="margin: 20px">
      <g-upload accept="image/*"  
        action="https://node-server-file.herokuapp.com/upload"
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
    };
  },
  watch: {},
  methods: {
  },
}

</script>
<style lang="less">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #app {
    margin: 20px;
  }

</style>