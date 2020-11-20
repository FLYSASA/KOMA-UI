<template>
  <div class="g-sub-nav">
    <span @click="onClick">
      <slot name="title"></slot>
    </span>
    <div class="popover" v-show="open">
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
      open: false
    };
  },

  computed: {},

  created() {},

  methods: {
    onClick(){
      this.open = !this.open;
    }
  },
};
</script>
<style lang='less' scoped>
.g-sub-nav {
  position: relative;
  > span {
    padding: 10px 20px; 
    display: inline-block;    // inline-block一般都有bug，习惯性的加上vertical-align: top;
    vertical-align: top;
  }
  .popover {
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid;
    white-space: nowrap;
  }
  .g-sub-nav .popover{
    top: 0;
    left: 100%;
    margin-left: 8px;
  }
}
</style>
