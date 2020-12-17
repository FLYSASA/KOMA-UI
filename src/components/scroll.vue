<template>
  <div ref="parent" class="koma-scroll-wrapper" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div ref="child" class="koma-scroll">
      <slot></slot>
    </div>
    <div class="koma-scroll-track" v-show="scrollBarVisible">
      <div class="koma-scroll-bar" ref="bar">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KomaScroll',
  components: {},
  props: {},
  data() {
    return {
      scrollBarVisible: false,
    };
  },
  computed: {},
  mounted() {
    let parent  = this.$refs['parent']
    let child = this.$refs['child']
    let translateY = 0
    let {height: childHeight} = child.getBoundingClientRect()
    let {height: parentHeight} = parent.getBoundingClientRect()
    let {borderTopWidth, borderBottomWidth, paddingTop, paddingBottom} = window.getComputedStyle(parent)
    borderTopWidth = parseInt(borderTopWidth)
    borderBottomWidth = parseInt(borderBottomWidth)
    paddingTop = parseInt(paddingTop)
    paddingBottom = parseInt(paddingBottom)
    // 最大可滚动的高度
    let maxHeight = childHeight - parentHeight + borderTopWidth + borderBottomWidth + paddingTop + paddingBottom
    parent.addEventListener('wheel', (e)=>{
      if(e.deltaY > 20) {
        translateY -= 20 * 3
      } else if (e.deltaY < -20) {
        translateY -= -20 * 3
      } else {
        translateY -= e.deltaY * 3
      }
      if(translateY > 0) {
        translateY = 0
      }else if(translateY < -maxHeight){
        translateY = -maxHeight;
      } else {
        // 防止在页面滚动时抖动
        e.preventDefault();
      }
      child.style.transform = `translateY(${translateY}px)`
      this.updateScrollBar(parentHeight, childHeight, translateY)
    })
    this.updateScrollBar(parentHeight, childHeight, translateY)
  },
  methods: {
    updateScrollBar (parentHeight, childHeight, translateY) {
      // 计算滚动条高度 parentHeight / childHeight = barHeight / parentHeight
      let barHeight = parentHeight * parentHeight / childHeight
      let bar = this.$refs.bar
      bar.style.height = barHeight + 'px'
      // 计算滚动条位置 translateY / childHeight = y / parentHeight
      let y = parentHeight * translateY / childHeight
      bar.style.transform = `translateY(${-y}px)`
    },
    onMouseEnter () {
      this.scrollBarVisible = true
    },
    onMouseLeave () {
      this.scrollBarVisible = false
    }
  },
};
</script>
<style lang='less' scoped>
.koma-scroll {
  transition: transform 0.05s ease;
  &-wrapper {
    overflow: hidden;
    position: relative;
  }
  &-track{
    position: absolute;
    top: 0;
    right: 0;
    width: 6px;
    height: 100%;
    background: #f1f1f1;
    opacity: .8;
  }
  &-bar {
    position: absolute;
    width: 100%;
    height: 40px;
    cursor: pointer;
    border-radius: 4px;
    background: rgba(144,147,153,.3);
    &:hover {
      background: rgba(144,147,153,.5);
    }
  }
}
</style>
