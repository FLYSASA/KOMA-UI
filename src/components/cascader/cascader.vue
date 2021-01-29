<template>
  <div class="koma-cascader" ref="cascader" v-click-outside="close">
    <div class="trigger" @click="toggle">
      <span v-if="!computedSelectedName" class="koma-place-holder">{{ placeHolder }}</span>
      {{ computedSelectedName }}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <cascader-item class="popover"
      :loading-item="loadingItem"
      :height="popoverHeight"
      :selected="selected"
      @update:selected="onUpdateSelected"
      :load-data="loadData"
      :items="datas"></cascader-item>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import cascaderItem from './cascader-item'
import ClickOutside from '../directives/click-outside';

export default {
  name: 'KomaCascader',
  components: { cascaderItem },
  directives: {
    ClickOutside
  },
  props: {
    datas: {
      type: Array
    },
    selected: {
      type: Array,
      default: () => []
    },
    popoverHeight:{
      type: String
    },
    loadData: {
      type: Function,
    },
    placeHolder: {
      type: String,
      default: '请选择'
    }
  },
  data() {
    return {
      popoverVisible: false,
      loadingItem: {}
    };
  },

  computed: {
    computedSelectedName() {
      return this.selected.map(i => i.name).join(' / ')
    }
  },

  created() {},

  methods: {
    open() {
      this.popoverVisible = true
    },
    close() {
      this.popoverVisible = false
    },
    toggle() {
      if(this.popoverVisible) {
        this.close()
      } else {
        this.open()
      }
    },
    getTreeItemById(data, id) {
      let hasfound = false, result = null;
      let fn = function(data, id) {
        if(Array.isArray(data) && !hasfound) {
          data.forEach((i) => {
            if(i.id === id) {
              result = i;
              hasfound = true;
            } else if (i.children) {
              fn(i.children, id)
            }
          })
        }
      }
      fn(data, id)
      return result;
    },
    onUpdateSelected(val){
      this.$emit('update:selected', val)
      let lastItem = val[val.length - 1];

      let callback = (res) => {
        // 拿到数据回调完成，不再显示loading
        this.loadingItem = {};
        // 为了找到要更新的item项, 把它更新成用户懒加载返回的数据，但这里为了不违反单向数据流，子组件直接修改传入的数据，所以这里浅拷贝
        let copy = JSON.parse(JSON.stringify(this.datas))
        let toUpdate = this.getTreeItemById(copy, lastItem.id)
        toUpdate.children = res
        this.$emit('update:datas', copy)
      }
      if(!lastItem.isLeaf && this.loadData) {
        this.loadingItem = lastItem
        this.loadData(lastItem, callback); 
      }
    },
  },
};
</script>
<style lang='less' scoped>
  @import '../../css/_var';
  .koma-cascader {
    display: inline-block;
    position: relative;
    cursor: pointer;
    .koma-place-holder {
      font-size: @font-size;
      color: @input-holder-color;
    }
    .trigger {
      border: 1px solid @border-color;
      border-radius: @border-radius;
      height: @input-height;
      display: flex;
      align-items: center;
      min-width: 10em;
      padding: 0 1em;
      background: #fff;
    }
    .popover-wrapper {
      z-index: 1;
      position: absolute;
      top: 100%;
      left: 0;
      display: flex;
      background: white;
      &:extend(.box-shadow);
      margin-top: 5px;
    }
  }
</style>
