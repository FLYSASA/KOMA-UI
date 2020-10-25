<template>
  <div>
    <div class="cascader">
      <div class="trigger" @click="popoverVisible = !popoverVisible">
      </div>
      <div class="popover-wrapper" v-if="popoverVisible">
        <cascader-item :items="datas" class="popover" :height="popoverHeight"></cascader-item>
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
    },
    popoverHeight:{
      type: String
    }
  },
  data() {
    return {
      popoverVisible: true,
    };
  },

  computed: {},

  created() {
    console.log(this.popoverClassName)
  },

  methods: {},
};
</script>
<style lang='less' scoped>
  @import './css/_var';
  .cascader {
    position: relative;
    .trigger {
      border: 1px solid red;
      height: @input-height;
      width: 100px;
    }
    .popover-wrapper {
      position: absolute;
      top: 100%;
      left: 0;
      display: flex;
      background: white;
      &:extend(.box-shadow);
    }
  }
</style>
