<template>
  <div>
    <div class="cascader-wrapper">
      <slot></slot>
    </div>
    <div class="popover">
      <cascader-item v-for="item in datas" :sourceItem="item"></cascader-item>
    </div>
  </div>
</template>

<script>
import cascaderItem from './cascader-item'
export default {
  name: 'KomaCascader',
  components: { cascaderItem },
  props: {
    datas: {
      type: Array
    }
  },
  data() {
    return {
    };
  },

  computed: {},

  created() {
    console.log(this.datas)
  },

  methods: {},
};
</script>
<style lang='less' scoped>
  @import './css/_var';
  .cascader-wrapper {

  }
</style>
