<template>
  <div  class="collapse-item">
    <div class="title">
      {{title}}
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KomaCollapseItem',
  components: {},
  props: {
    title: {
      type: String,
      required: true
    }
  },
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
  .collapse-item {
    > .title {

    }
  }
</style>
