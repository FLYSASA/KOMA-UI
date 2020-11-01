<template>
  <div class="cascader" ref="cascader" v-click-outside="close">
    <div class="trigger" @click="toggle">
      {{computedSelectedName }}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <cascader-item class="popover"
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
import ClickOutside from './directives/click-outside';

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
    popoverHeight:{
      type: String
    },
    selected: {
      type: Array,
      default: () => []
    },
    loadData: {
      type: Function,
    }
  },
  data() {
    return {
      popoverVisible: false,
    };
  },

  computed: {
    computedSelectedName() {
      return this.selected.map(i => i.name).join('-')
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
    onUpdateSelected(val){
      this.$emit('update:selected', val)
      let lastItem = val[val.length - 1];
      // 定义最简单的，在数组中找到对应id的item
      let simplest = (children, id) => {
        return children.filter(item => item.id === id)[0]
      }
      // 复杂多维的
      let complex = (children, id)=>{
        let noChildrenArr = []
        let hasChildrenArr = []
        children.forEach(i => {
          if(i.children && i.children.length) {
            hasChildrenArr.push(i)
          } else {
            noChildrenArr.push(i)
          }
        })
        let found = simplest(noChildrenArr, id)
        if(found){
          return found;
        } else {
          found = simplest(hasChildrenArr, id)
          if(found) {
            return found
          } else {
            for (let i=0; i < hasChildrenArr.length; i++) {
              found = complex(hasChildrenArr[i].children, id)
              if(found) {
                return found;
              }
            }
            return undefined;
          }
        }
      }

      let callback = (res) => {
        // 为了找到要更新的item项, 把它更新成用户懒加载返回的数据，但这里为了不违反单向数据流，子组件直接修改传入的数据，所以这里浅拷贝
        let copy = JSON.parse(JSON.stringify(this.datas))
        let toUpdate = complex(copy, lastItem.id)
        toUpdate.children = res
        this.$emit('update:datas', copy)
      }
      if(!lastItem.isLeaf) {
        this.loadData && this.loadData(lastItem, callback); 
      }
    },
  },
};
</script>
<style lang='less' scoped>
  @import './css/_var';
  .cascader {
    display: inline-block;
    position: relative;
    border: 1px solid red;
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
      margin-top: 5px;
    }
  }
</style>
