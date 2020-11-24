<template>
  <div class="g-nav-item" :class="{active: selected, vertical}" @click="onclick" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KomaNavItem',
  components: {},
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: false
    };
  },
  inject: ['root', 'vertical'],

  computed: {},

  created() {
    this.root.addItem(this)
  },

  methods: {
    onclick(){
      // 激活父组件
      this.root.namePath = []
      this.$parent.updateNamePath && this.$parent.updateNamePath()
      // 子组件简单处理，只需要通知点击的name就行，数据交给父组件组处理
      this.$emit('update:selected', this.name)
    }
  },
};
</script>
<style lang='less' scoped>
@import 'css/_var';
.g-nav-item {
  padding: 10px 20px;
  position: relative;
  &:not(.vertical){
    &.active {
      &::after{
        content: '';
        position: absolute;
        bottom: 1px;
        left: 0;
        width: 100%;
        border-bottom: 2px solid @active-color;
      }
    }
  }
  &.vertical {
    &.active {
      color: @active-color;
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  cursor: pointer;
}
.g-sub-nav .g-nav-item:not(.vertical) {
  &.active {
    background: @gray;
    color: @color;
    &::after{
      display: none;
    }
  }
}
</style>
