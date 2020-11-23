<template>
  <div class="g-sub-nav" :class="{active}" v-click-outside="close">
    <span class="g-sub-nav-label" @click="onClick">
      <slot name="title"></slot>
      <span class="g-sub-nav-icon" :class="{open}">
        <g-icon name="right"></g-icon>
      </span>
    </span>
    <div class="g-sub-nav-popover" v-show="open" :class="{vertical}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import GIcon from '../icon'
import ClickOutside from '../../directives/click-outside';
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
    margin-top: 1px;
    white-space: nowrap;
    background: #fff;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
    border-radius: @border-radius;
    font-size: @font-size;
    color: @light-color;
    min-width: 8em;
    &.vertical {
      position: static;
      border-radius: 0;
      box-shadow: none;
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
    }
    .g-sub-nav-icon {
      transition: transform 200ms;
      display: inline-flex;
      margin-left: 1em;
      svg {
        fill: @light-color;
      }
      &.open {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
