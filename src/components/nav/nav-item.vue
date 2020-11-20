<template>
  <div class="g-nav-item" :class="{active: selected}" @click="onclick">
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
  inject: ['root'],

  computed: {},

  created() {
    this.root.addItem(this)
  },

  methods: {
    onclick(){
      // 子组件简单处理，只需要通知点击的name就行，数据交给父组件组处理
      this.$emit('add:selected', this.name)
    }
  },
};
</script>
<style lang='less' scoped>
.g-nav-item {
  padding: 10px 20px;
  &.active {
    background: red;
  }
}
</style>
