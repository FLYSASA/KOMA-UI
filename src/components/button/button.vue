<template>
  <button class="koma-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <g-icon class="loading icon" name="loading" v-if="loading"></g-icon>
    <g-icon  class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  // 单独引入g-icon，以免用户使用过程中出错
  import Icon from '../icon';
  export default {
    name: 'KomaButton',
    components: {
      'g-icon': Icon
    },
    props: {
      icon:{
        type: String,
        default: ''
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(val){
          return ['left', 'right'].includes(val)
        }
      },
      loading: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style lang='less' scoped>
  @import '../../css/_var';
  .koma-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: @font-size;
    height: @button-height;
    padding: 0 1em;
    border-radius: @border-radius;
    border: 1px solid @border-color;
    background: @button-bg;
    vertical-align: middle;
    &[disabled="disabled"]{
      cursor: not-allowed;
    }
    &:hover {border-color: @border-color-hover;}
    &:active { background-color: @button-active-bg; }
    &:focus { outline: none; }
    > .icon { 
      order: 1; 
      margin-right: .3em; 
    }
    > .content{
      order: 2;
    }
    &.icon-right{
      > .icon{
        order: 2;
        margin-left: .3em;
        margin-right: 0;
      }
      > .content {
        order:1;
      }
    }
    .loading {
      animation: spin 1s infinite linear; // infinite 无限循环， linear 线性匀速
    }
    & + & {
      margin-left: 4px;
    }
  }
</style>