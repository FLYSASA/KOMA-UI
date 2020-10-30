<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      {{computedSelectedName }}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <cascader-item class="popover"
      :height="popoverHeight"
      :selected="selected"
      @update:selected="onUpdateSelected"
      :items="datas"></cascader-item>
    </div>
    <slot></slot>
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
    },
    selected: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      popoverVisible: true,
    };
  },

  computed: {
    computedSelectedName() {
      return this.selected.map(i => i.name).join('-')
    }
  },

  created() {
  },

  methods: {
    onUpdateSelected(val){
      this.$emit('update:selected', val)
    }
  },
};
</script>
<style lang='less' scoped>
  @import './css/_var';
  .cascader {
    display: inline-block;
    position: relative;
    .trigger {
      border: 1px solid @border-color;
      border-radius: @border-radius;
      height: @input-height;
      display: flex;
      align-items: center;
      min-width: 10em;
      padding: 0 1em;
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
