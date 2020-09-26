<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KomaTabs',
  components: {},
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(val){
        return ['horizontal', 'vertical'].indexOf(val) >= 0
      }
    }
  },
  data () {
    return {
    };
  },
  created() {
    // this.$emit('update:selected')
  },
  methods: {},
}

</script>
<style lang='less' scoped>
</style>