<template>
  <div class="g-sub-nav">
    <span>
      <slot name="title"></slot>
    </span>
    <div class="popover">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KomaSubNav',
  components: {},
  props: {},
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
.g-sub-nav {
  padding: 10px 20px;
  position: relative;
  .popover {
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid;
    white-space: nowrap;
  }
}
</style>
