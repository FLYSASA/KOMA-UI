<template>
  <div class="popover" @click="click">
    <div class="content-wrapper"  v-if="visible">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KomaPopover',
  components: {},
  data() {
    return {
      visible: false
    };
  },

  computed: {},

  created() {},

  methods: {
    click() {
      this.visible = !this.visible
    }
  },
};
</script>
<style lang='less' scoped>
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
    .content-wrapper {
      position: absolute;
      left: 0;
      bottom: 100%;
      border: 1px solid red;
      box-shadow: 0 0 3px rgba(0,0,0,0.5);
    }
  }
</style>
