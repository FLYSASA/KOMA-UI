<template>
  <div class="cascader-item" :style="{ height }">
    <div>
      selected： {{ selected && selected[level] && selected[level].name }}
      level: {{ level }}
    </div>
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
      :level="level+1"
      :items="rightItems" 
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
      return this.leftSelected && this.leftSelected.children || null
    }
  },
  created () {},
  methods: {
    onclickLable(item) {
      // this.$set(this.selected, this.level, item)
      let copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item
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
  border: 1px solid red;
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