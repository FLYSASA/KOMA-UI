<template>
  <div class="row" :style="computedRowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KomaRow',
  components: {},
  props: {
    gutter: {
      type: [Number, String],
      default: 0
    },
  },
  data () {
    return {
    };
  },
  computed: {
    computedRowStyle(){
        return  {
          margin: `0 -${this.gutter/2}px`
        }
      }
  },
  created () {
  },
  mounted () {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter
    })
  },
  methods: {}
}

</script>
<style lang='less' scoped>
    .row {
      display: flex;
      flex-wrap: wrap;
    }
</style>