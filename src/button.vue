<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
    <g-icon class="loading" name="loading"></g-icon>
    <g-icon  class="icon" v-if="icon" :name="icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
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
      }
    }
  }
</script>
<style lang='less' scoped>
  @keyframes spin {
    0% { transform: rotate(0deg);}
    100% { transform: rotate(360deg);}
  }
  .g-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    vertical-align: middle;
    &:hover {border-color: var(--border-color-hover);}
    &:active { background-color: var(--button-active-bg); }
    &:focus { outline: none; }
    > .icon { order: 1; margin-right: .3em; }
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
  }
</style>