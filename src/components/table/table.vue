<template>
  <div class="koma-table-wrapper" ref="wrapper">
    <div :style="{overflow: 'auto'}" ref="tableWrapper">
      <table class="koma-table" ref="table" :class="{border, compact, striped}">
        <thead>
          <tr>
            <th :style="{width: '50px'}"><input ref="allCheckBox" type="checkbox" @change="onChangeAllItems" :checked="isAllItemSelected"></th>
            <th v-if="numberVisible" :style="{width: '50px'}">#</th>
            <th :style="{width: `${column.width}px`}" v-for="column in columns" :key="column.field">
              <div class="kama-table-name" 
                @click="changeOrderBy(column.field)">
                {{column.text}}
                <span class="koma-sorter" v-if="column.field in orderBy" >
                  <g-icon name="ascending" :class="{active: orderBy[column.field] === 'asc'}"></g-icon>
                  <g-icon name="descending" :class="{active: orderBy[column.field] === 'desc'}"></g-icon>
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in dataSource" :key="item.id">
            <td :style="{width: '50px'}">
              <!-- 这里不用 selectedItems.indexOf(item) 是因为， selectedItems里的对象都是经过深拷贝追加的，已经不再是原来的元素，他们是不等的 -->
              <input type="checkbox"
              :checked="inselectedItems(item)"
              @change="onChangeItem(item, index, $event)">
            </td>
            <td v-if="numberVisible" :style="{width: '50px'}">{{index + 1}}</td>
            <template v-for="column in columns">
              <td :style="{width: `${column.width}px`}" :key="column.field">{{item[column.field]}}</td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="koma-table-loading" v-if="loading">
      <g-icon name="loading"></g-icon>
    </div>
  </div>
</template>

<script>
import GIcon from '../icon';
export default {
  name: 'KomaTable',
  components: { GIcon },
  props: {
    dataSource: {
      type: Array,
      required: true,
      validator(arr){
        // 验证是否含有关键key
        return !(arr.filter(i=> i.id === undefined).length > 0)
      }
    },
    columns: {
      type: Array,
      required: true
    },
    numberVisible: {
      type: Boolean,
      default: false
    },
    // 边框
    border: {
      type: Boolean,
      default: false
    },
    // 是否紧凑型
    compact: {
      type: Boolean,
      default: false
    },
    // 斑马纹
    striped: {
      type: Boolean,
      default: true
    },
    // 勾选项
    selectedItems: {
      type: Array,
      default: () => []
    },
    // 排序
    orderBy: {
      type: Object,
      default: () => ({})   // 注意这里的括号，如果默认为对象的话，需要加括号
    },
    // 加载态
    loading: {
      type: Boolean,
      default: false
    },
    // 高度，用于出现固定表头
    height: {
      type: Number,
    }
  },
  data() {
    return {

    };
  },
  watch:{
    selectedItems(val){
      if(val.length > 0 && val.length < this.dataSource.length) {
        this.$refs['allCheckBox'].indeterminate = true
      } else if (val.length === this.dataSource.length){
        this.$refs['allCheckBox'].indeterminate = false
      } else {
        this.$refs['allCheckBox'].indeterminate = false
      }
    }
  },
  computed: {
    isAllItemSelected(){
      // return this.dataSource.length === this.selectedItems.length
      // 上面的判断是不对的
      // this.selectedItems = [{id: 2}, {id: 1}]
      // this.dataSource = [{id: 1}, {id: 2}]
      // 如何判断上面两个数组元素是相等的？
      // 注意sort默认是按字典排序的，即 [1, 2, 11, 22].sort()  =>  [1, 11, 2, 22], 并且会改变原数组！
      // 因为sort会改变原数组，所以前面map一下产生一个新的数组
      const a = this.dataSource.map(i => i.id).sort()   
      const b = this.selectedItems.map(i => i.id).sort()
      if(a.length !== b.length) {
        return false
      }
      let equal = true
      for(let i = 0; i < a.length; i++){
        if(a[i] !== b[i]){
          equal = false;
          break;
        }
      }
      return equal;
    },
  },
  mounted() {
    // clone 浅拷贝
    let cloneTable  = this.$refs.table.cloneNode(false)
    this.cloneTable = cloneTable
    // cloneTable.className = 'clone-table'
    cloneTable.classList.add('clone-table')
    // 找到表格thead
    let thead = this.$refs.table.children[0]
    let {height} = thead.getBoundingClientRect()
    this.$refs.tableWrapper.style.marginTop = height + 'px';
    // 保证整体高度为用户设定的高度
    this.$refs.tableWrapper.style.height = this.height - height + 'px';
    cloneTable.appendChild(thead)
    // 将thead放到复制的表格里去
    this.$refs.wrapper.appendChild(cloneTable)
  },
  beforeDestroy(){
    this.cloneTable.remove()
  },
  methods: {
    updateHeadersWidth(){
      let cloneTable = this.cloneTable;
      // 获取原表头
      let orginHead = Array.from(this.$refs.table.children).filter((node) => {
        return node.tagName.toLowerCase() === 'thead'
      })[0]
      let cloneTableHead;
      Array.from(cloneTable.children).map(node => {
        if(node.tagName.toLowerCase() !== 'thead'){
          node.remove()
        } else {
          cloneTableHead = node
        }
      })
      // 将原来表头的每列宽度赋值给 clone的header
      Array.from(orginHead.children[0].children).map((th, index) => {
        const {width} = th.getBoundingClientRect()
        console.log(cloneTableHead.children[0].children[index])
        cloneTableHead.children[0].children[index].style.width = width + 'px'
      })
    },
    changeOrderBy(key){
      const copy = JSON.parse(JSON.stringify(this.orderBy))
      let oldValue = copy[key]
      if (oldValue === 'asc') {
        copy[key] = 'desc'
      } else if (oldValue === 'desc') {
        copy[key] = true
      } else {
        copy[key] = 'asc'
      }
      this.$emit('update:orderBy', copy)
    },
    inselectedItems(item){
      return this.selectedItems.filter(i => i.id === item.id).length > 0
    },
    onChangeAllItems(e){
      let selected = e.target.checked;
      this.$emit('update:selectedItems', selected ? this.dataSource : [])
    },
    onChangeItem(item, index, e){
      let selected = e.target.checked;
      let copy = JSON.parse(JSON.stringify(this.selectedItems))
      if(selected){
        copy.push(item)
      }else{
        copy = copy.filter(i => i.id !== item.id)
      }
      this.$emit('update:selectedItems', copy)
    },
  },
};
</script>
<style lang='less' scoped>
@import 'css/_var';
@grey: darken(@gray, 10%);
.koma-table-wrapper {
  position: relative;
  overflow: auto;
  .koma-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border-bottom: 1px solid @grey;
    &.border {
      border: 1px solid @grey;
      td, th {
        border: 1px solid @grey;
      }
    }
    &.compact {
      td, th {
        padding: 4px;
      }
    }
    td, th {
      text-align: left;
      border-bottom: 1px solid @grey;
      padding: 8px;
    }
    &.striped {
      tbody {
        > tr {
          &:nth-child(odd) {
            background: white;
          }
          &:nth-child(even) {
            background: lighten(@gray, 12%);
          }
        }
      }
    }
    .kama-table-name {
      display: flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
      .koma-sorter {
        margin: 0 4px;
        svg {
          width: 8px;
          height: 8px;
          fill: @grey;
          &.active {
            fill: red;
          }
        }
        display: inline-flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
  .koma-table-loading {
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      fill: @color;
      width: 30px;
      height: 30px;
      .spin();
    }
  }
  .clone-table{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
}
</style>
