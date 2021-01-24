<template>
  <div class="wrapper">
    <demos-component
      name="基础用法"
      demokey="0"
      description="可以设定提示框的弹出方向。"
      :codeStr="codeStr1">
      <template v-slot:code>
        <k-button @click="$toast('点击弹出提示', { position: 'top', autoClose: false })">上方弹出</k-button>
        <k-button @click="$toast('点击弹出提示', { position: 'middle'})">中间弹出</k-button>
        <k-button @click="$toast('点击弹出提示', { position: 'bottom'})">下方弹出</k-button>
      </template>
    </demos-component>

    <demos-component
      name="关闭设定"
      demokey="1"
      description="可以设置autoClose属性，支持传入一个Boolean或者一个时间数值，不传的话默认3s后关闭。
      传入closeButton属性自定义关闭文本。"
      :codeStr="codeStr2">
      <template v-slot:code>
        <k-button @click="$toast('假如世界没有猫了怎么办？', { position: 'middle', autoClose: 1000 })">延时1s关闭</k-button>
        <k-button @click="$toast('假如世界没有猫了怎么办？', { position: 'middle', autoClose: false })">不自动关闭</k-button>
        <k-button @click="$toast('假如世界没有猫了怎么办？', { position: 'middle', closeButton: {text: '我会很难过'} })">自定义关闭文本</k-button>
      </template>
    </demos-component>

    <demos-component
      name="支持HTML"
      demokey="2"
      description="可以传入html直接渲染在提示框内，但是你应该知道这是很不安全的，谨慎使用。"
      :codeStr="codeStr3">
      <template v-slot:code>
        <k-button @click="clickBtn">html渲染</k-button>
      </template>
    </demos-component>
  </div>
</template>

<script>
import Vue from 'vue';
import plugin from '../../../src/plugin';
import Button from '../../../src/components/button/button';
import Icon from '../../../src/components/icon';
import demosComponent from './demos-component.vue';
Vue.use(plugin)

export default {
  name: 'KomaButton',
  components: {
    demosComponent,
    'k-button': Button,
    'k-icon': Icon,
  },
  props: {},
  data () {
    return {
      codeStr1: 
      `
        <k-button @click="$toast('点击弹出提示', { position: 'top' })">上方弹出</k-button>
        <k-button @click="$toast('点击弹出提示', { position: 'middle'})">中间弹出</k-button>
        <k-button @click="$toast('点击弹出提示', { position: 'bottom'})">下方弹出</k-button>
      `,
      codeStr2: 
      `
        <k-button @click="$toast('假如世界没有猫了怎么办？', { position: 'middle', autoClose: 1000 })">延时1s关闭</k-button>
        <k-button @click="$toast('假如世界没有猫了怎么办？', { position: 'middle', autoClose: false })">不自动关闭</k-button>
        <k-button @click="$toast('假如世界没有猫了怎么办？', { position: 'middle', closeButton: {text: '我会很难过'} })">自定义关闭文本</k-button>
      `,
      codeStr3: 
      `
        <k-button @click="clickBtn">html渲染</k-button>
        
        methods: {
          clickBtn(){
            this.$toast('<span style="color: red;">越努力的人越幸运吗？</span>', {
              enableHtml: true,
              closeButton: {
                text: '是的',
                callback(){
                  console.log('越努力的人越幸运。')
                }
              }
            })
          }
        }
      `
    };
  },
  methods: {
    clickBtn(){
      this.$toast('<span style="color: red;">越努力的人越幸运吗？</span>', {
        enableHtml: true,
        closeButton: {
          text: '是的',
          callback(){
            console.log('越努力的人越幸运。')
          }
        }
      })
    }
  }
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