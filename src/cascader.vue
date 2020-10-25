<template>
  <div>
    <div class="cascader">
      <div class="trigger" @click="popoverVisible = !popoverVisible">
      </div>
      <div class="popover" v-if="popoverVisible">
        <cascader-item :items="datas"></cascader-item>
      </div>
      <slot></slot>
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
      popoverVisible: true,
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
  .cascader {
    .trigger {
      border: 1px solid red;
      height: @input-height;
      width: 100px;
    }
    .popover {
      border: 1px solid red;
      height: 200px;
      position: relative;
      display: flex;
      .label {
        white-space: nowrap;
      }
    }
  }
</style>
