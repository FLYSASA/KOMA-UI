<template>
  <div class="demo">
    <h2>{{ title }}</h2>
    <p>组件描述</p>
    <h3>组件功能名字</h3>
    <p>组件功能描述</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <slot name="code"></slot>
      </div>
      <div class="code-content" style="height: 0;" v-highlight>
        <div class="code-content-height">
          <div class="code-user-desc">
            组件描述说明
          </div>
          <pre><code class="vue">{{ computedCodeStr }}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)" ref="xxx">
        <k-icon class="icon-down" :name="isShow[0] === false ? 'down' : 'up'"></k-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from '../mixin';
import KIcon from '../../../src/components/icon';
export default {
  name: 'demosComponent',
  mixins: [mixin],
  components: {
    KIcon
  },
  props: {
    // 大标题
    title: {
      type: String,
      default: '创建组件文档模板'
    },
    // 代码块
    codeStr: {
      type: String,
      default: ''
    }
  },
  computed: {
    computedCodeStr() {
      return this.codeStr.replace(/\t+|  +/g, '').trim()
    },
  },

}
</script>