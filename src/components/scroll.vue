<template>
  <div ref="parent" class="koma-scroll-wrapper" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @selectstart="onSelectStartScrollBar">
    <div ref="child" class="koma-scroll" :style="{ transform: `translateY(${contentY}px)`}">
      <slot></slot>
    </div>
    <div class="koma-scroll-track" v-show="scrollBarVisible">
      <div class="koma-scroll-bar" ref="bar" @mousedown="onMouseDownScrollBar">
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
      isScrolling: false,
      // 拖动的scrollbar初始位置
      startPosition: undefined,
      endPosition: undefined,
      contentY: 0,
      scrollBarY: 0,
      barHeight: undefined,
      parentHeight: undefined,
    };
  },
  // watch: {
  //   // contantY(内容滚动距离) / parentHeight(内容器的高) = scrollBarY(滚动条滚动距离) / barHeight(滚动条高度)
  //   scrollBarY (val) {
  //     this.contentY = -(this.parentHeight * val / this.barHeight)
  //   }
  // },
  computed: {},
  mounted() {
    // 鼠标拖动移动
    // 监听document的原因时以防移动过快，导致拖动失效
    document.addEventListener('mousemove', (e)=>{
      this.onMouseMoveScrollbar(e)
    })
    // 鼠标松开
    document.addEventListener('mouseup', (e)=>{
      this.onMouseUpScrollbar(e)
    })
    let parent  = this.$refs['parent']
    let child = this.$refs['child']
    let {height: childHeight} = child.getBoundingClientRect()
    let {height: parentHeight} = parent.getBoundingClientRect()
    this.parentHeight = parentHeight
    let {borderTopWidth, borderBottomWidth, paddingTop, paddingBottom} = window.getComputedStyle(parent)
    borderTopWidth = parseInt(borderTopWidth)
    borderBottomWidth = parseInt(borderBottomWidth)
    paddingTop = parseInt(paddingTop)
    paddingBottom = parseInt(paddingBottom)
    // 最大可滚动的高度
    let maxHeight = childHeight - parentHeight + borderTopWidth + borderBottomWidth + paddingTop + paddingBottom
    // 为什么是20 无非让滚动更自然
    parent.addEventListener('wheel', (e)=>{
      if(e.deltaY > 20) {
        this.contentY -= 20 * 3 
      } else if (e.deltaY < -20) {
        this.contentY -= -20 * 3
      } else {
        this.contentY -= e.deltaY * 3
      }
      if(this.contentY > 0) {
        this.contentY = 0
      }else if(this.contentY < -maxHeight){
        this.contentY = -maxHeight;
      } else {
        // 防止在页面滚动时抖动
        e.preventDefault();
      }
      this.updateScrollBar(parentHeight, childHeight, this.contentY)
    })
    this.updateScrollBar(parentHeight, childHeight, this.contentY)
  },
  beforeDestroy () {

  },
  methods: {
    // 鼠标按下滚动条
    onMouseDownScrollBar(e) {
      this.isScrolling = true
      let {screenX: x, screenY: y} = e
      this.startPosition = [x, y]
    },
    // 拖动滚动条
    onMouseMoveScrollbar(e) {
      this.scrollBarVisible = true
      if(!this.isScrolling) {return;}

      let maxScrollHeight = this.parentHeight - this.barHeight;
      let {screenX: x, screenY: y} = e
      this.endPosition = [x, y]
      let deltaX = this.endPosition[0] - this.startPosition[0]
      let deltaY = this.endPosition[1] - this.startPosition[1]
      this.scrollBarY = parseInt(this.scrollBarY) + deltaY
      if(this.scrollBarY < 0) {
        this.scrollBarY = 0
      } else if (this.scrollBarY > maxScrollHeight) {
        this.scrollBarY = maxScrollHeight;
      }
      this.contentY = -(this.parentHeight * this.scrollBarY / this.barHeight)
      // 因为mousemove过程中，translate会保留上次的值，所以基于这个值去做累加就好
      this.startPosition = this.endPosition
      // 为什么要用transform，因为其性能更好
      this.$refs['bar'].style.transform = `translate(0, ${this.scrollBarY}px)`
    },
    // 松开滚动条
    onMouseUpScrollbar(e) {
      this.isScrolling = false
      if(this.$refs.parent && !this.$refs.parent.contains(e.target)){
        setTimeout(()=>{
          this.scrollBarVisible = false
        }, 350)
      }
    },
    // 去掉文本选中
    onSelectStartScrollBar(e) {
      e.preventDefault();
    },
    updateScrollBar (parentHeight, childHeight, translateY) {
      // 计算滚动条高度 parentHeight / childHeight = barHeight / parentHeight
      let barHeight = parentHeight * parentHeight / childHeight
      this.barHeight = barHeight;
      let bar = this.$refs.bar
      bar.style.height = barHeight + 'px'
      // 计算滚动条位置 translateY / childHeight = y / parentHeight
      let y = parentHeight * translateY / childHeight
      bar.style.transform = `translateY(${-y}px)`
      this.scrollBarY = -y
    },
    // 鼠标悬浮展示滚动条
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
    width: 8px;
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
