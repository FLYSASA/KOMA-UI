<template>
  <div class="koma-pager" v-if="!(hideIfOnePage && totalPage <= 1)">
    <span class="koma-pager-nav prev" :class="{disabled: currentPage === 1}"
      @click="change(currentPage - 1)">
      <g-icon name="left"></g-icon>
    </span>
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
    <span class="koma-pager-nav next"  :class="{disabled: currentPage === totalPage}"
      @click="change(currentPage + 1)">
      <g-icon name="right"></g-icon>
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
      .filter((n)=> n > 0 && n <= this.totalPage)
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
      if(page >= 1 && page <= this.totalPage) {
        this.$emit('update:current-page', page)
      }
    },
  }
}

</script>
<style lang='less' scoped>
@import "css/_var";
@width: 25px;
@height: 25px;
.koma-pager {
  display: flex;
  align-items: center;
  user-select: none;
  .separator{
    width: @width;
    font-size: @font-size;
    cursor: default;
  }
  .koma-pager-nav {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: @height;
    width: @width;
    margin: 0 4px;
    cursor: pointer;
    &.disabled {
      cursor: not-allowed;
      svg {
        fill: darken(@gray, 30%);
      }
    }
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
    min-width: @width;
    height: @height;
    &:hover {
      border-color: @primary-color;
      color: @primary-color;
    }
    cursor: pointer;
    &.active {
      border-color: @primary-color;
      color: @primary-color;
    }
  }
}
</style>