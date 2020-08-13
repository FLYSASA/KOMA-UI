<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
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
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background-color: var(--button-active-bg);
    }
    &:focus {
      outline: none;
    }
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
  }
</style>