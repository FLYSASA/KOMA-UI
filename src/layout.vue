<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KomaLayout',
  props: {},
  data () {
    return {
      layoutClass: {
        hasSider: false
      }
    };
  },
  created () {},
  mounted () {
    console.log(this.$children)
    this.$children.forEach((vm) => {
     if(vm.$options.name === 'KomaSider') {
       this.layoutClass.hasSider = true
     }
    })
  },
  methods: {}
}

</script>
<style lang='less' scoped>
  .layout {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    border: 1px solid green;
    &.hasSider {
      flex-direction: row;
    }
  }
</style>