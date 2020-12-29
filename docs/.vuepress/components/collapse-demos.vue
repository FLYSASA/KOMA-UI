<template>
  <div class="wrapper">
    <demos-component
      name="基础用法"
      demokey="0"
      description="可以设定提示框的弹出方向。"
      :codeStr="codeStr1">
      <template v-slot:code>
        <k-collapse :selected.sync="selected">
          <k-collapse-item title="标题1" name="1">内容1</k-collapse-item>
          <k-collapse-item title="标题2" name="2">内容2</k-collapse-item>
          <k-collapse-item title="标题3" name="3">内容3</k-collapse-item>
        </k-collapse>
      </template>
    </demos-component>
  </div>
</template>

<script>
import Button from '../../../src/components/button/button';
import Icon from '../../../src/components/icon';
import Collapse from '../../../src/components/collapse/collapse';
import CollapseItem from '../../../src/components/collapse/collapse-item';
import demosComponent from './demos-component.vue';

export default {
  name: 'KomaButton',
  components: {
    demosComponent,
    'k-button': Button,
    'k-icon': Icon,
    'k-collapse': Collapse,
    'k-collapse-item': CollapseItem,
  },
  props: {},
  data () {
    return {
      codeStr1: 
      `
        <k-popover>
          <k-button>上方弹出</k-button>
          <template slot="content">弹出内容</template>
        </k-popover>
        <k-popover position="bottom">
          <k-button>下方弹出</k-button>
          <template slot="content">弹出内容</template>
        </k-popover>
        <k-popover position="left">
          <k-button>左方弹出</k-button>
          <template slot="content">弹出内容</template>
        </k-popover>
        <k-popover position="right">
          <k-button>右方弹出</k-button>
          <template slot="content">弹出内容</template>
        </k-popover>
      `,
      selected: ['2']
    };
  },
  mounted() {
    this.demoPopoverWrapper = this.$refs.demoPopoverWrapper
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