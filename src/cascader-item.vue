<template>
  <div class="cascader-item" :style="{ height }">
    <div class="left">
      <div class="label" v-for="item in items" @click="leftSelected = item">
        {{ item.name }}
        <icon class="icon" v-if="item.children" name="right"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-item :items="rightItems" :height="height"></cascader-item>
    </div>
  </div>
</template>

<script>
import Icon from './icon'
export default {
  name: 'cascader-item',
  components: { Icon },
  props: {
    items: {
      type: Array
    },
    height: {
      type: String
    }
  },
  data () {
    return {
      leftSelected: null
    };
  },
  computed: {
    rightItems () {
      return this.leftSelected && this.leftSelected.children || null
    }
  },
  created () {},
  methods: {}
}

</script>
<style lang='less' scoped>
@import './css/_var';
.cascader-item {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100px;
  .left {
    height: 100%;
    padding: .3em 0;
  }
  .right {
    height: 100%;
    border-left: 1px solid @border-color-light;
  }
  .label {
    white-space: nowrap;
    padding: .3em 1em;
    display: flex;
    align-items: center;
    .icon {
      margin-left: 1em;
      fill: @border-color;
    }
  }
}
</style>