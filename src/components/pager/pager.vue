<template>
  <div class="koma-pager">
    <span v-for="(page, index) in pages" 
    :key="index" 
    :class="{active: page === currentPage, separator: page === '...'}"
    class="koma-pager-item">
      {{page}}
    </span>
  </div>
</template>

<script>
function unique(array) {
  // return [...new Set(array)]
  // 考虑兼容性写法, 应用对象key唯一的特性
  let obj = {}
  array.forEach((i)=>{
    obj[i] = true
  })
  // 注意这里返回的都是字符串，不再是number
  return Object.keys(obj).map(i => parseInt(i))
}
export default {
  name: 'KomaPager',
  components: {},
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required:true
    },
    hideIfOnePage: {
      type: Boolean,
      default: true
    }
  },
  data () {
    let pages = unique([1, this.totalPage, this.currentPage, 
      this.currentPage - 1, 
      this.currentPage - 2, 
      this.currentPage + 1, 
      this.currentPage + 2])
      .sort((a, b)=> a - b)                     // 升序排序
      .reduce((prev, current, index, array)=>{  // 页码间隔大于1时，中间显示...
        if(array[index - 1] && array[index] - array[index - 1] > 1){
          prev.push('...')
        }
        prev.push(current)
        return prev;
      }, [])
    return {
      pages
    };
  },
  computed: {},
  created () {},
  methods: {}
}

</script>
<style lang='less' scoped>
@import "css/_var";
.koma-pager {
  display: flex;
  user-select: none;
  &-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid @border-color;
    border-radius: @border-radius;
    font-size: @font-size;
    padding: 0 4px;
    margin: 0 4px;
    min-width: 25px;
    height: 25px;
    &.separator {
      cursor: default;
    }
    &:hover {
      border-color: @blue;
      color: @blue;
    }
    cursor: pointer;
    &.active {
      border-color: @blue;
      color: @blue;
    }
  }
}
</style>