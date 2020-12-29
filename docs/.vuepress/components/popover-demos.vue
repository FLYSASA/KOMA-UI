<template>
  <div class="wrapper">
    <demos-component
      name="基础用法"
      demokey="0"
      description="可以设定提示框的弹出方向。"
      :codeStr="codeStr1">
      <template v-slot:code>
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
      </template>
    </demos-component>

    <demos-component
      name="hover弹出"
      demokey="1"
      description="将trigger属性设为hover即可鼠标悬浮展示popover内容。"
      :codeStr="codeStr1">
      <template v-slot:code>
        <k-popover trigger="hover">
          <k-button>上方弹出</k-button>
          <template slot="content">弹出内容</template>
        </k-popover>
        <k-popover position="bottom" trigger="hover">
          <k-button>下方弹出</k-button>
          <template slot="content">弹出内容</template>
        </k-popover>
        <k-popover position="left" trigger="hover">
          <k-button>左方弹出</k-button>
          <template slot="content">弹出内容</template>
        </k-popover>
        <k-popover position="right" trigger="hover">
          <k-button>右方弹出</k-button>
          <template slot="content">弹出内容</template>
        </k-popover>
      </template>
    </demos-component>

    <demos-component
      name="挂载元素"
      demokey="2"
      description="可以设置container属性绑定某个元素，popover就会挂载到该元素下。"
      :codeStr="codeStr2">
      <template v-slot:code>
        <div ref="demoPopoverWrapper" class="demo-popover-wrapper"></div>
        <k-popover :container="demoPopoverWrapper">
          <k-button>挂载元素</k-button>
          <template slot="content">我被挂在了demoPopoverWrapper下</template>
        </k-popover>
      </template>
    </demos-component>
  </div>
</template>

<script>
import Button from '../../../src/components/button/button';
import Icon from '../../../src/components/icon';
import Popover from '../../../src/components/popover';
import demosComponent from './demos-component.vue';

export default {
  name: 'KomaButton',
  components: {
    demosComponent,
    'k-button': Button,
    'k-icon': Icon,
    'k-popover': Popover
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
      codeStr2: 
      `
        <div ref="demoPopoverWrapper" class="demo-popover-wrapper"></div>
        <k-popover :container="demoPopoverWrapper">
          <k-button>上方弹出</k-button>
          <template slot="content">弹出内容</template>
        </k-popover>

        data(){
          return  {
            demoPopoverWrapper: null
          }
        },
        mounted() {
          this.demoPopoverWrapper = this.$refs.demoPopoverWrapper
        },
      `,
      demoPopoverWrapper: null
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