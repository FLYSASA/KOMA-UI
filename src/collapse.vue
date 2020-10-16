<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KomaCollapse',
  components: {},
  data() {
    return {

    };
  },

  computed: {},

  created() {},

  methods: {},
};
</script>
<style lang='less' scoped>
  @gray: #ddd;
  .collapse {
    border: 1px solid @gray;
  }
</style>
