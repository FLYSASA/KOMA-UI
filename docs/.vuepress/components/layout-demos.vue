<template>
  <div class="wrapper">
    <demos-component
      name="基础用法"
      demokey="0"
      description="协助进行页面级整体布局。"
      :codeStr="codeStr1">
      <template v-slot:code>
        <k-layout class="demo-layout">
          <k-header class="demo-header flex-center">header</k-header>
          <k-content class="demo-content flex-center">content</k-content>
          <k-footer class="demo-footer flex-center">footer</k-footer>
        </k-layout>

        <k-layout class="demo-layout">
          <k-header class="demo-header flex-center">header</k-header>
          <k-layout>
            <k-sider class="demo-sider flex-center">sider</k-sider>
            <k-content class="demo-content flex-center">content</k-content>
          </k-layout>
          <k-footer class="demo-footer flex-center">footer</k-footer>
        </k-layout>

        <k-layout class="demo-layout">
          <k-sider class="demo-sider flex-center" style="height: 300px;">sider</k-sider>
          <k-layout>
            <k-header class="demo-header flex-center">header</k-header>
            <k-content class="demo-content flex-center">content</k-content>
            <k-footer class="demo-footer flex-center">footer</k-footer>
          </k-layout>
        </k-layout>
      </template>
    </demos-component>

    <demos-component
      name="支持关闭sider"
      demokey="1"
      description="通过设置sider的 closeBtnVisible 属性为 true，来显示关闭按钮。"
      :codeStr="codeStr2">
      <template v-slot:code>
        <k-layout class="demo-layout">
          <k-header class="demo-header flex-center">header</k-header>
          <k-layout>
            <k-sider class="demo-sider flex-center" closeBtnVisible>sider</k-sider>
            <k-content class="demo-content flex-center">content</k-content>
          </k-layout>
          <k-footer class="demo-footer flex-center">footer</k-footer>
        </k-layout>
      </template>
    </demos-component>
  </div>
</template>

<script>
import Layout from '../../../src/components/layout/layout';
import Header from '../../../src/components/layout/header';
import Sider from '../../../src/components/layout/sider';
import Content from '../../../src/components/layout/content';
import Footer from '../../../src/components/layout/footer';
import demosComponent from './demos-component.vue';

export default {
  name: 'KomaButton',
  components: {
    demosComponent,
    'k-layout': Layout,
    'k-header': Header,
    'k-sider': Sider,
    'k-content': Content,
    'k-footer': Footer,
  },
  props: {},
  data () {
    return {
      codeStr1: 
      `
        <k-layout class="demo-layout">
          <k-header class="demo-header flex-center">header</k-header>
          <k-content class="demo-content flex-center">content</k-content>
          <k-footer class="demo-footer flex-center">footer</k-footer>
        </k-layout>

        <k-layout class="demo-layout">
          <k-header class="demo-header flex-center">header</k-header>
          <k-layout>
            <k-sider class="demo-sider flex-center">sider</k-sider>
            <k-content class="demo-content flex-center">content</k-content>
          </k-layout>
          <k-footer class="demo-footer flex-center">footer</k-footer>
        </k-layout>

        <k-layout class="demo-layout">
          <k-sider class="demo-sider flex-center" style="height: 300px;">sider</k-sider>
          <k-layout>
            <k-header class="demo-header flex-center">header</k-header>
            <k-content class="demo-content flex-center">content</k-content>
            <k-footer class="demo-footer flex-center">footer</k-footer>
          </k-layout>
        </k-layout>
      `,
      codeStr2: 
      `
        <k-layout class="demo-layout">
          <k-header class="demo-header flex-center">header</k-header>
          <k-layout>
            <k-sider class="demo-sider flex-center" closeBtnVisible>sider</k-sider>
            <k-content class="demo-content flex-center">content</k-content>
          </k-layout>
          <k-footer class="demo-footer flex-center">footer</k-footer>
        </k-layout>
      `,
    };
  },
}

</script>

<style lang="less" scoped>
  .demo-layout {
    color: #fff;
    margin-bottom: 20px;
    .flex-center {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .demo-header {
      height: 50px;
      background:lightskyblue;
    }
    .demo-sider {
      height: 200px;
      width: 200px;
      background:  rgb(4, 173, 230);
    }
    .demo-content {
      height: 200px;
      background: deepskyblue;
    }
    .demo-footer {
      height: 50px;
      background:lightskyblue;
    }
  }
</style>