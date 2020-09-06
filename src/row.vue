<template>
  <div class="row" :style="computedStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    gutter: {
      type: [Number, String]
    }
  },
  data () {
    return {
    };
  },
  computed: {
    computedStyle(){
    console.log(this.gutter)
      return  {
        margin: `0 -${this.gutter/2}px`
      }
    }
  },
  created () {},
  methods: {}
}

</script>
<style lang='less' scoped>
    .row {
      display: flex;
      // flex-wrap: wrap;
    }
</style>