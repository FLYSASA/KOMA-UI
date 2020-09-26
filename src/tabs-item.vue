<template>
  <div class="tabs-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KomaTabsItem',
  components: {},
  props: {
    disabled: {
      type: String,
      default: false
    }
  },
  data () {
    return {
    };
  },
  methods: {}
}

</script>
<style lang='less' scoped>
</style>