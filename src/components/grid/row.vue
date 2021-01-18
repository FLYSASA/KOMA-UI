<template>
  <div class="koma-row" :style="computedRowStyle" :class="rowClass">
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
    align: {
      type: String,
      default: 'left',
      validator(val){
        return ['left', 'right', 'center'].indexOf(val) >= 0
      }
    }
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
    },
    rowClass(){
      let {align} = this
      return [align && `align-${align}`]
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
    .koma-row {
      display: flex;
      flex-wrap: wrap;
      &.align-left {
        justify-content: flex-start;
      }
      &.align-right {
        justify-content: flex-end;
      }
      &.align-center {
        justify-content: center;
      }
    }
</style>