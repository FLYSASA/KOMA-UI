<template>
  <div class="demo component-demo">
    <!-- <h2>{{ title }}</h2> -->
    <!-- <p>组件描述</p> -->
    <h3>📚{{ name }}</h3>
    <p>{{ description }}</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <slot name="code"></slot>
      </div>
      <div class="code-content" style="height: 0;" v-highlight>
        <div class="code-content-height">
          <!-- <div class="code-user-desc">
            组件描述说明
          </div> -->
          <pre><code class="vue">{{ computedCodeStr }}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(demokey)" ref="xxx">
        <k-icon class="icon-down" :name="isShow[demokey] === false ? 'down' : 'up'"></k-icon>
        <span class="lock-code-word">{{isShow[demokey] === false ? '显示代码' : '隐藏代码'}}</span>
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
    // 为了保证各折叠代码块互相不受影响需要设置唯一key
    demokey: {
      type: Number | String,
      default: 0
    },
    // 大标题
    title: {
      type: String,
      default: '创建组件文档模板'
    },
    // 组件名字
    name: {
      type: String
    },
    // 组件介绍
    description: {
      type: String
    },
    // 代码块
    codeStr: {
      type: String,
      default: ''
    }
  },
  computed: {
    computedCodeStr() {
      return this.codeStr.replace(/^ {8}/gm, '').trim()
    },
  },

}
</script>
<style lang="less" scoped>
.component-demo {
  > p {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
    margin-bottom: 20px;
  }
}
</style>