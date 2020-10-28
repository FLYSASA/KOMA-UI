<template>
  <div class="cascader-item" :style="{ height }">
    <div class="left">
      <div class="label" v-for="(item, index) in items"
        :key="index"
        @click="onclickLable(item)">
        {{ item.name }}
        <icon class="icon" v-if="item.children" name="right"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-item
      :selected="selected"
      :level="level+1"
      :items="rightItems"
      @update:selected="onUpdateSelected"
      :height="height"></cascader-item>
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
    },
    selected: {
      type: Array,
      default: () => []
    },
    level: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      leftSelected: null
    };
  },
  computed: {
    rightItems () {
      let currentSelected = this.selected[this.level]
      if (currentSelected && currentSelected.children){
        return currentSelected.children || null
      }
      return null;
    }
  },
  created () {},
  methods: {
    onUpdateSelected(val){
      this.$emit('update:selected', val)
    },
    onclickLable(item) {
      // this.$set(this.selected, this.level, item)
      // 精髓，将selected按level赋值
      let copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item
      copy.splice(this.level + 1)
      // 单向数据流
      this.$emit('update:selected', copy)
    }
  }
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