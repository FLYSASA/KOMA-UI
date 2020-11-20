<template>
  <div class="nav-item" :class="{active: selected}" @click="onclick">
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

  computed: {},

  mounted() {},

  methods: {
    onclick(){
      // 子组件简单处理，只需要通知点击的name就行，数据交给父组件组处理
      this.$emit('add:selected', this.name)
    }
  },
};
</script>
<style lang='less' scoped>
.nav-item {
  min-width: 100px;
  text-align: center;
  &.active {
    background: red;
  }
}
</style>
