<template>
  <div class="g-sub-nav" :class="{ active, vertical }" v-click-outside="close">
    <span class="g-sub-nav-label" @click="onClick">
      <slot name="title"></slot>
      <span class="g-sub-nav-icon" :class="{ open, vertical }">
        <g-icon name="right"></g-icon>
      </span>
    </span>
    <template v-if="vertical">
      <transition @enter="enter" @leave="leave" @after-leave="afterLeave" @after-enter="afterEnter">
        <div class="g-sub-nav-popover" v-show="open" :class="{ vertical }">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <div class="g-sub-nav-popover" v-show="open" :class="{ vertical }">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
import GIcon from '../icon'
import ClickOutside from '@/components/directives/click-outside';
export default {
  name: 'KomaSubNav',
  components: {
    GIcon
  },
  inject: ['root', 'vertical'],
  directives: {
    ClickOutside
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false
    };
  },

  computed: {
    active(){
      return this.root.namePath.indexOf(this.name) >= 0
    }
  },

  created() {},

  methods: {
    enter(el, done) {
      // 先拿到auto真实高度，存到变量height
      let {height} = el.getBoundingClientRect()
      // 高度先为0 -> 然后转换auto，这样高度会有变化，可以响应 transition: height 1s;
      el.style.height = 0
      // 这里加一句计算高度的原因是因为浏览器会让多次多样的样式赋值合并
      // 如果中间进行一个进行元素高度计算的操作，就不会发生合并现象
      el.getBoundingClientRect()
      el.style.height = `${height}px`
      el.addEventListener('transitionend', ()=>{
        done();
      })
    },
    // 重新设为auto，不然因为overflow:hidden; 子级会看不到
    afterEnter(el) {
      el.style.height = 'auto';
    },
    leave(el, done) {
      let {height} = el.getBoundingClientRect()
      el.style.height = `${height}px`
      el.getBoundingClientRect()
      el.style.height = 0;
      // 如果直接调用done的话，动画会直接结束，直接display none。这里监听动画结束事件然后再去调用done
      el.addEventListener('transitionend', ()=>{
        done();
      })
    },
    afterLeave(el){
      el.style.height = 'auto';
    },
    close(){
      this.open = false
    },
    onClick(){
      this.open = !this.open;
    },
    // 子组件是激活状态的话，自己也激活
    updateNamePath(){
      this.root.namePath.unshift(this.name)
      if(this.$parent.updateNamePath) {
        this.$parent.updateNamePath()
      } else {
        this.root.namePath = []
      }
    },
  },
};
</script>
<style lang='less' scoped>
@import 'css/_var';
.g-sub-nav {
  position: relative;
  &:not(.vertical) {
    &.active {
      &::after{
        content: '';
        position: absolute;
        bottom: 1px;
        left: 0;
        width: 100%;
        border-bottom: 2px solid @active-color;
      }
    }
  }
  &-icon {
    display: none;
  }
  &-label {
    padding: 10px 20px; 
    display: inline-block;    // inline-block一般都有bug，习惯性的加上vertical-align: top;
    vertical-align: top;
  }
  &-popover {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 10;
    margin-top: 1px;
    white-space: nowrap;
    background: #fff;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
    border-radius: @border-radius;
    font-size: @font-size;
    color: @light-color;
    min-width: 8em;
    transition: height 250ms;
    &.vertical {
      position: static;
      border-radius: 0;
      box-shadow: none;
      overflow: hidden;
    }
  }
  .g-sub-nav {
    &.active {
      &::after {
        display: none;
      }
    }
    .g-sub-nav-popover {
      top: 0;
      left: 100%;
      margin-left: 8px;
    }
    .g-sub-nav-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }
    .g-sub-nav-icon {
      transition: transform 200ms;
      display: inline-flex;
      margin-left: 1em;
      svg {
        fill: @light-color;
      }
      &.vertical {
        transform: rotate(90deg);
        &.open {
          transform: rotate(270deg);
        }
      }
      &.open {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
