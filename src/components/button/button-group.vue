<template>
  <div class="koma-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'KomaButtonGroup',
    props: {},
    data() {
      return {};
    },
    mounted() {
      console.log(this.$el, this.$el.children)

      for (let node of this.$el.children) {
        console.log(node)
        if (node.nodeName.toLowerCase() !== 'button') {
          console.warn(`k-button-group 的子元素应该全是 k-button, 但是你写的是 ${ node.nodeName }`)
        }
      }
    }
  }
</script>
<style lang='less' scoped>
  @import '../../css/_var';
  .koma-button-group {
    display: inline-flex;
    vertical-align: middle;

    >.koma-button {
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