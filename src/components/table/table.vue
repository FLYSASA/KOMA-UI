<template>
  <div class="koma-table-wrapper" ref="wrapper"  :class="{ border }">
    <div class="koma-table-wrapper-content" :style="{overflow: 'auto'}" ref="tableWrapper">
      <table class="koma-table" ref="table" :class="{border, compact, striped}">
        <thead>
          <tr>
            <th v-if="expandKey" :style="{width: '50px'}" class="table-center"></th>
            <th v-if="checkable" :style="{width: '50px'}" class="table-center">
              <input class="pointer" ref="allCheckBox" type="checkbox" @change="onChangeAllItems" :checked="isAllItemSelected">
            </th>
            <th v-if="numberVisible" :style="{width: '50px'}" class="table-center">#</th>
            <th :style="{width: `${column.width}px`}" v-for="(column, idx) in columns" :key="column.prop"  :class="{last: idx === columns.length - 1 && !$scopedSlots.action}">
              <div class="kama-table-name" 
                @click="changeOrderBy(column.prop)">
                {{column.text}}
                <span class="koma-sorter" v-if="column.prop in orderBy" >
                  <k-icon name="ascending" :class="{active: orderBy[column.prop] === 'asc'}"></k-icon>
                  <k-icon name="descending" :class="{active: orderBy[column.prop] === 'desc'}"></k-icon>
                </span>
              </div>
            </th>
            <th ref="actionsHeader" v-if="$scopedSlots.action">操作</th>
            <!-- 因为滚动条占据宽度，导致表头与列不对齐，这里给表头一个gutter来让其等于滚动条的宽度保证对齐 -->
            <th class="gutter" ref="gutter" style="padding: 0;"></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item, index) in dataSource">
            <!-- 主体内容 -->
            <tr :key="item.id">
              <td v-if="expandKey" :style="{width: '50px'}" @click="onExpand(item)" class="table-center">
                <k-icon name="right" class="expand-icon" :class="{active: expendedItemKeys.indexOf(item.id) > -1}"></k-icon>
              </td>
              <td v-if="checkable" :style="{width: '50px'}" class="table-center">
                <!-- 这里不用 selectedItems.indexOf(item) 是因为， selectedItems里的对象都是经过深拷贝追加的，已经不再是原来的元素，他们是不等的 -->
                <input type="checkbox"
                :checked="inselectedItems(item)"
                @change="onChangeItem(item, index, $event)">
              </td>
              <td v-if="numberVisible" :style="{width: '50px'}" class="table-center">{{index + 1}}</td>
              <template v-for="column in columns">
                <td :style="{width: `${column.width}px`}" :key="column.prop">
                  <template v-if="column.render">
                    <!-- 使用render的方式，可以将孙组件里的html直接渲染到父组件上，并且可以通过传递参数到slot-scope上 -->
                    <vnodes :vnodes="column.render({row: item})"></vnodes>
                  </template>
                  <template v-else>
                    {{item[column.prop]}}
                  </template>
                </td>
              </template>
              <td v-if="$scopedSlots.action">
                <div ref="actions" style="display: inline-block;">
                  <slot :row="item" :$index="index"  name="action"></slot>
                </div>
              </td>
            </tr>
            <!-- 展开内容 -->
            <tr v-if="inExpandedIds(item.id)" :key="`expand-${item.id}`">
              <td :colspan="expandedCellColSpan">
                {{item[expandKey] || '空'}}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
      <div class="no-data" v-if="!dataSource.length">
        暂无数据
      </div>
    </div>
    <div class="koma-table-loading" v-if="loading">
      <k-icon name="loading"></k-icon>
    </div>
  </div>
</template>

<script>
import KIcon from '../icon';
export default {
  name: 'KomaTable',
  components: { 
    KIcon,
    Vnodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes
    }
  },
  props: {
    dataSource: {
      type: Array,
      required: true,
      validator(arr){
        // 验证是否含有关键key
        return !(arr.filter(i=> i.id === undefined).length > 0)
      }
    },
    // 列
    // columns: {
    //   type: Array,
    //   required: true
    // },
    numberVisible: {
      type: Boolean,
      default: false
    },
    // 边框
    border: {
      type: Boolean,
      default: true
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
    checkable: {
      type: Boolean,
      default: false
    },
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
    // 高度，用于固定表头
    height: {
      type: Number,
    },
    // 展开内容的key
    expandKey: {
      type: String
    }
  },
  data() {
    return {
      expendedItemKeys: [],
      columns: []
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
    },
    'dataSource.length'(val){
      this.$nextTick(()=>{
        let wrapperWidth = this.$refs['tableWrapper'].getBoundingClientRect().width
        let tbodyWidth = this.$refs['table'].getBoundingClientRect().width
        this.addThGutter()
      })
    }
  },
  computed: {
    expandedCellColSpan(){
      let result = 0;
      if(this.checkable){
        result += 1
      }
      if(this.expandKey){
        result += 1
      }
      return this.columns.length + result;
    },
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
    
    // 我们需要知道如果slot内容有作用域，$slots是不会统计到的，如<template #action="scope"></template>
    // 利用这个特点可以找出所有插槽内容为k-table-column的
    // 因为会有tag undefined的值，将其过滤掉
    const komaTableColumns = this.$slots.default.filter(i => i.tag)
    this.columns = komaTableColumns.map(node => {
      // 需要在k-table-column 组件里定义该prop才能拿到
      let { text, prop, width} = node.componentOptions.propsData
      let render = node.data.scopedSlots && node.data.scopedSlots.default
      return {text, prop, width, render}
    })
    this.$nextTick(()=>{
      // 固定表头
      this.fixedHeader()
      // 给表头追加滚动条的宽度，以免因为滚动条的宽度导致的表头错位
      this.addThGutter()
      // 计算操作列的宽度
      this.updateActionWidth()
    })
  },
  beforeDestroy(){
    this.cloneTable.remove()
  },
  methods: {
    fixedHeader(){
      // clone 浅拷贝 
      // 复制table壳啦，里面的html并没有复制
      let cloneTable  = this.$refs.table.cloneNode(false)
      this.cloneTable = cloneTable
      // cloneTable.className = 'clone-table' // 这样做会把所有的class重置为一个
      cloneTable.classList.add('clone-table')
      // 找到表格thead
      // this.$refs.table.children: HTMLCollection: [thead, tbody] 
      let thead = this.$refs.table.children[0]
      let {height} = thead.getBoundingClientRect()
      this.$refs.tableWrapper.style.marginTop = height + 'px';
      // 保证整体高度为用户设定的高度
      this.$refs.tableWrapper.style.height = this.height - height + 'px';
      cloneTable.appendChild(thead)
      // 将thead放到复制的表格里去
      this.$refs.wrapper.appendChild(cloneTable)
    },
    addThGutter(){
      let wrapperWidth = this.$refs['tableWrapper'].getBoundingClientRect().width
      let tbodyWidth = this.$refs['table'].getBoundingClientRect().width
      // width - tbodyWidth = 滚动条的宽度
      if(wrapperWidth - tbodyWidth > 0){
        this.$refs.gutter.style.width = wrapperWidth - tbodyWidth - (this.$scopedSlots.action ? 0 : -1) + 'px'
      }else {
        let tableEl = this.$refs.table
        const tableTd = tableEl.querySelectorAll('td')
        if(tableTd.length) {
          tableTd.forEach((node)=>{
            node.style.borderBottom = '1px solid #d5d5d5'
          })
        }
        this.$refs.gutter.style.display = 'none'
        this.$refs.actionsHeader.style.borderRight = 'none'
      }
    },
    updateActionWidth(){
      if(this.$scopedSlots.action && this.dataSource.length) {
        let div = this.$refs.actions[0]
        let {width} = div.getBoundingClientRect()
        let parent = div.parentNode   // td
        let styles = getComputedStyle(parent)
        let paddingLeft = styles.getPropertyValue('padding-left') 
        let paddingRight = styles.getPropertyValue('padding-right') 
        let borderLeft = styles.getPropertyValue('border-left-width') 
        let borderRight = styles.getPropertyValue('border-right-width') 
        // 给操作列的表头重新赋值真实宽度
        let newWidth = width + parseInt(paddingLeft) + parseInt(paddingRight) + parseInt(borderLeft) + parseInt(borderRight) + 'px';
        this.$refs.actionsHeader.style.width = newWidth;
        // 给操作列的每一行td重新赋值真实宽度
        this.$refs.actions.map((div)=>{
          div.parentNode.style.width = newWidth;
        })
      }
    },
    inExpandedIds(id){
      return this.expendedItemKeys.indexOf(id) > -1
    },
    onExpand(i){
      if(this.inExpandedIds(i.id)){
        this.expendedItemKeys.splice(this.expendedItemKeys.indexOf(i.id), 1)
      }else{
        this.expendedItemKeys.push(i.id)
      }
    },
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
        cloneTableHead.children[0].children[index].style.width = width + 'px'
      })
    },
    changeOrderBy(prop){
      const copy = JSON.parse(JSON.stringify(this.orderBy))
      let oldValue = copy[prop]
      if (oldValue === 'asc') {
        copy[prop] = 'desc'
      } else if (oldValue === 'desc') {
        copy[prop] = true
      } else {
        copy[prop] = 'asc'
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
@import '../../css/_var';
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
table {
  display: table;
  table-layout: fixed;
}

@grey: darken(@gray, 10%);
.koma-table-wrapper {
  position: relative;
  overflow: auto;
  .no-data {
    height: 100%;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: @input-holder-color;
  }
  &.border {
    border: 1px solid @grey;
  }
  .koma-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    thead {
      tr {
        border-top: none;
      }
    }
    tbody {
      font-size: 14px;
    }
    &.border {
      td, th {
        border: 1px solid @grey;
      }
      th {
        border-left: none;
        border-top: none;
        &.last{
          border-right: none;
        }
      }
      td {
        border-left: none;
        border-bottom: none;
        &:last-child{
          border-right: none;
        }
      }
    }
    th.gutter {
      border-right: none;
    }
    &.compact {
      td, th {
        padding: 4px;
      }
    }
    td, th {
      text-align: left;
      border: none;
      border-bottom: 1px solid @grey;
      padding: 8px;
    }
    // 背景色
    tr {
      background: white;
    }
    &.striped {
      tbody {
        > tr {
          &:nth-child(odd) {
            background: white;
          }
          &:nth-child(even) {
            background: #f6f8fa;
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
            fill: @primary-color;
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
  .expand-icon {
    cursor: pointer;
    &.active {
      transform: rotate(90deg);
      transition: all .2s;
    }
  }
  .koma-table .table-center{
    text-align: center;
  } 
}
</style>
