<template>
  <div class="row" :style="computedStyle">
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
    computedStyle(){
        return  {
          margin: `0 -${this.gutter}px`
        }
      }
  },
  created () {
    console.log('父', 'created')
  },
  mounted () {
    this.$children.forEach((vm) => {
      console.log(vm,this.gutter)
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