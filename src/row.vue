<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
    };
  },
  computed: {},
  created () {},
  methods: {}
}

</script>
<style lang='less' scoped>
    .row {
      display: flex;
      flex-wrap: wrap;
    }
</style>