<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'KomaButton',
    props: {},
    data() {
      return {};
    },
    mounted() {
      for (let node of this.$el.children) {
        if (node.nodeName.toLowerCase() === 'div') {
          console.warn(`g-button-group 的子元素应该全是g-button, 但是你写的是 ${ node.nodeName }`)
        }
      }
    }
  }
</script>
<style lang='less' scoped>
  @import './css/_var';
  .g-button-group {
    display: inline-flex;
    vertical-align: middle;

    >.g-button {
      border-radius: 0;

      &:not(:first-child) {
        margin-left: -1px;
      }

      &:hover {
        z-index: 1;
      }

      &:first-child {
        border-top-left-radius: @border-radius;
        border-bottom-left-radius: @border-radius;
      }

      &:last-child {
        border-top-right-radius: @border-radius;
        border-bottom-right-radius: @border-radius;
      }
    }
  }
</style>