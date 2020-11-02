<template>
  <div class="cascader-item" :style="{ height }">
    <div class="left">
      <div class="label" v-for="(item, index) in items"
        :key="index"
        @click="onclickLable(item)">
        <span class="name">{{ item.name }}</span>
        <span class="icons">
          <template v-if="loadingItem && loadingItem.name === item.name">
            <icon class="loading" name="loading"></icon>
          </template>
          <template v-else>
            <icon class="icon" v-if="rightArrowVisible(item)" name="right"></icon>
          </template>
        </span>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-item
      :loading-item="loadingItem"
      :load-data="loadData"
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
    },
    loadData: {
      type: Function,
    },
    loadingItem: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      leftSelected: null
    };
  },
  computed: {
    rightItems () {
      // 之前的会存在bug，当selected和level不更新时，不会重新计算该值
      // 现在改为检测items的变化
      if(this.selected && this.selected[this.level]) {
        let item = this.items.filter(i => i.name === this.selected[this.level].name)
        if(item[0] && item[0].children && item[0].children.length) {
          return item[0].children;
        }
      }
      return null;
    },
  },
  created () {},
  methods: {
    rightArrowVisible(item) {
      return this.loadData ? !item.isLeaf : item.children;
    },
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
  cursor: pointer;
  .left {
    height: 100%;
    padding: .3em 0;
    overflow: auto;
  }
  .right {
    height: 100%;
    border-left: 1px solid @border-color-light;
  }
  .label {
    white-space: nowrap;
    padding: .5em 1em;
    display: flex;
    align-items: center;
    &:hover{
      background: @gray;
    }
    > .name {
      margin-right: 1em;
      user-select: none;
    }
    > .icons {
      margin-left: auto;
      fill: @border-color;
      display: flex;
      align-items: center;
      .loading {
        animation: spin 2s infinite linear;
      }
    }
  }
}
</style>