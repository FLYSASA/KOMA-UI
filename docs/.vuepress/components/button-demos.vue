<template>
  <div class="demo">
    <h2>创建组件文档模板</h2>
    <p>组件描述</p>
    <h3>组件功能名字</h3>
    <p>组件功能描述</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-button>默认按钮</g-button>
        <g-button icon="shezhi">图标按钮</g-button>
        <g-button :loading="true">加载中</g-button>
        <g-button disabled>禁用按钮</g-button>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <!-- <div class="code-user-desc">
            组件描述说明
          </div> -->
          <pre><code class="vue">{{ content }}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)" ref="xxx">
        <k-icon class="icon-down" :name="isShow[0] === false ? 'down' : 'up'"></k-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <!-- <pre><code>{{ content }}</code></pre> -->
  </div>
</template>

<script>
import Button from '../../../src/components/button/button';
import KIcon from '../../../src/components/icon'
import mixin from '../mixin'
export default {
  name: 'KomaButton',
  mixins: [mixin],
  components: {
    'g-button': Button,
    KIcon
  },
  props: {},
  data () {
    return {
      content: 
      `
        <g-button>默认按钮</g-button>
        <g-button icon="shezhi">图标按钮</g-button>
        <g-button :loading="true">加载中</g-button>
        <g-button disabled>禁用按钮</g-button>
      `.replace(/\t+| +/g, '').trim()
    };
  },
  computed: {},
  created () {},
  methods: {}
}

</script>