<template>
  <div class="wrapper cascader-demo">
    <demos-component
      name="基础用法"
      demokey="0"
      description="简单的用法。"
      codedes="parseResponse函数的作用是，文件上传成功后给uploader回传文件的预览地址。"
      :codeStr="codeStr1">
      <template v-slot:code>
        <k-upload accept="image/*"
          :file-list.sync="fileList"
          :parseResponse="parseResponse"
          action="http://127.0.0.1:3000/upload"
          name="file">
          <k-button icon="upload">上传</k-button>
        </k-upload>
      </template>
    </demos-component>

    <demos-component
      name="上传失败提示"
      demokey="1"
      description="error事件会回传错误信息。"
      :codeStr="codeStr2">
      <template v-slot:code>
        <k-upload accept="image/*"
          :file-list.sync="fileList2"
          :parseResponse="parseResponse"
          action="http://127.0.0.1:3000/upload"
          @error="onerror"
          name="file">
          <k-button icon="upload">上传</k-button>
        </k-upload>
      </template>
    </demos-component>
  </div>
</template>

<script>
import Uploader from '../../../src/components/uploader/uploader';
import Button from '../../../src/components/button/button';
import demosComponent from './demos-component.vue';

export default {
  name: 'KomaDatePickerDemo',
  components: {
    demosComponent,
    'k-upload': Uploader,
    'k-button': Button
  },
  props: {},
  data () {
    return {
      fileList: [],
      fileList2: [],
      codeStr1: 
      `
        <k-upload accept="image/*"
          :file-list.sync="fileList"
          :parseResponse="parseResponse" 
          action="http://127.0.0.1:3000/upload"
          name="file">
          <k-button icon="upload">上传</k-button>
        </k-upload>

        data() {
          return {
            fileList: [],
          }
        },
        methods: {
          parseResponse(res){
            let url = 'http://127.0.0.1:3000/preview/' + res.id
            return url;
          },
        }
      `,
      codeStr2: 
      `
        <k-upload accept="image/*"
          :file-list.sync="fileList"
          :parseResponse="parseResponse" 
          action="http://127.0.0.1:3000/upload"
          @error="onerror"
          name="file">
          <k-button icon="upload">上传</k-button>
        </k-upload>

        data() {
          return {
            fileList: [],
          }
        },
        methods: {
          onerror(error) {
            alert(error)
          },
          parseResponse(res){
            let url = 'http://127.0.0.1:3000/preview/' + res.id
            return url;
          },
        }

      `,
    };
  },
  methods: {
    onerror(error){
      alert(error)
    },
    parseResponse(res){
      let url = `http://127.0.0.1:3000/preview/${JSON.parse(res).id}`
      return url;
    },
  }
}

</script>

<style lang="less" scoped>
* {
    box-sizing: border-box;
  }
  .carousel-demo {
    .demo-content {
      width: 100%;
      height: 300px;
      background:#00abd5;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 24px;
    }
  }
</style>