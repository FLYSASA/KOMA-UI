<template>
  <div class="koma-pager">
    <template v-for="(page, index) in pages">
      <template v-if="page === currentPage">
        <span :key="index" class="koma-pager-item active">{{page}}</span>
      </template>
      <template v-else-if="page === '...'">
        <g-icon name="more" :key="index" class="separator"></g-icon>
      </template>
      <template v-else>
        <span :key="index" class="koma-pager-item other" @click="change(page)">{{page}}</span>
      </template>
    </template>
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
import GIcon from '../icon';
export default {
  name: 'KomaPager',
  components: { GIcon },
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
    return {
      
    }
  },
  computed: {
    pages(){
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
      return pages;
    }
  },
  created () {},
  methods: {
    change(page) {
      this.$emit('update:current-page', page)
    },
  }
}

</script>
<style lang='less' scoped>
@import "css/_var";
.koma-pager {
  display: flex;
  align-items: center;
  user-select: none;
  .separator{
    width: 25px;
    font-size: @font-size;
    cursor: default;
  }
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