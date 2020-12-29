<template>
  <div class="koma-layout" :class="layoutClass" ref="layout">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KomaLayout',
  data () {
    return {
      layoutClass: {
        hasSider: false
      }
    };
  },
  mounted () {
    this.$children.forEach((vm) => {
     if(vm.$options.name === 'KomaSider') {
       this.layoutClass.hasSider = true
     }
    })
  },
}

</script>
<style lang='less' scoped>
  .koma-layout {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    &.hasSider {
      flex-direction: row;
    }
  }
</style>