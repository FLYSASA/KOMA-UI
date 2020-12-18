<template>
  <div ref="parent" class="koma-scroll-wrapper"
  @wheel="onWheel"
  @mouseenter="onMouseEnter" 
  @mouseleave="onMouseLeave"
  @mousemove="onMouseMove">
    <div ref="child" class="koma-scroll" :style="{ transform: `translateY(${contentY}px)`}">
      <slot></slot>
    </div>
    <div class="koma-scroll-track" v-show="scrollBarVisible">
      <div class="koma-scroll-bar" ref="bar" 
      @mousedown="onMouseDownScrollBar" 
      @selectstart="onSelectStartScrollBar">
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
      mouseIn: false,
      // 拖动的scrollbar初始位置
      startPosition: undefined,
      endPosition: undefined,
      contentY: 0,
      scrollBarY: 0,
      barHeight: undefined,
      parentHeight: undefined,
      childHeight: undefined,
    };
  },
  computed: {
    maxScrollHeight () { 
      return this.parentHeight - this.barHeight
    },
    // childHeight () {
    //   return this.$refs.child.getBoundingClientRect().height
    // }
  },
  watch: {},
  mounted() {
    this.listenToDocument()
    this.parentHeight = this.$refs['parent'].getBoundingClientRect().height
    this.updateScrollBar()
    this.listenToRemoteResources()
    this.listenToDomChange()
  },
  methods: {
    // 等图片等资源完全load后，加一个data-koma-listened属性，并再一次更新scrollBar
    listenToRemoteResources () {
      let tags = this.$refs.parent.querySelectorAll('img, video, audio')
      Array.from(tags).map((tag) => {
        if (tag.hasAttribute('data-koma-listened')) { return }
        tag.setAttribute('data-koma-listened', 'yes')
        tag.addEventListener('load', () => {
          this.updateScrollBar()
        })
      })
    },
    listenToDomChange () {
      const targetNode = this.$refs.child
      const config = {attributes: true, childList: true, subtree: true};
      const callback = () => {
        this.listenToRemoteResources()
      }
      // 监视对DOM树更改
      const observer = new MutationObserver(callback);
      // 配置开始观察目标节点
      observer.observe(targetNode, config);
    },
    listenToDocument () {
      // 鼠标拖动移动
      // 监听document的原因时以防移动过快，导致拖动失效
      document.addEventListener('mousemove', e=> this.onMouseMoveScrollbar(e))
      // 鼠标松开
      document.addEventListener('mouseup', e=> this.onMouseUpScrollbar(e))
    },
    calcContentYFromDeltaY(deltaY) {
      let contentY = this.contentY;
      // 为什么是20 无非让滚动更自然
      if (deltaY > 20) {
        contentY -= 20 * 3 
      } else if (deltaY < -20) {
        contentY -= -20 * 3
      } else {
        contentY -= deltaY * 3
      }
      return contentY;
    },
    onWheel (e) {
      this.updateContentY(e)
      this.updateScrollBar()
    },
    updateContentY (e) {
      // 获取 maxHeight, 最大可滚动的高度, 用于限制 contentY
      let maxHeight = this.getContentYMax()
      this.contentY = this.calcContentYFromDeltaY(e.deltaY)
      // 给 contentY 加限制
      if(this.contentY > 0) {
        this.contentY = 0
      }else if(this.contentY <  -maxHeight){
        this.contentY = -maxHeight;
      } else {
        // 防止在页面滚动时抖动
        e.preventDefault();
      }
    },
    updateScrollBar () {
      this.childHeight = this.$refs['child'].getBoundingClientRect().height
      let { parentHeight, childHeight, contentY: translateY } = this
      // 计算滚动条高度 parentHeight / childHeight = barHeight / parentHeight
      this.barHeight = parentHeight * parentHeight / childHeight;
      let bar = this.$refs.bar
      bar.style.height = this.barHeight + 'px'
      // 计算滚动条位置 translateY / childHeight = y / parentHeight
      this.scrollBarY = - parentHeight * translateY / childHeight
      bar.style.transform = `translateY( ${this.scrollBarY }px)`
    },
    getContentYMax () {
      let {borderTopWidth, borderBottomWidth, paddingTop, paddingBottom} = window.getComputedStyle(this.$refs.parent)
      borderTopWidth = parseInt(borderTopWidth)
      borderBottomWidth = parseInt(borderBottomWidth)
      paddingTop = parseInt(paddingTop)
      paddingBottom = parseInt(paddingBottom)
      let maxHeight = this.childHeight - this.parentHeight + borderTopWidth + borderBottomWidth + paddingTop + paddingBottom
      return maxHeight;
    },
    calcScrollBarY (deltaY) {
      let newValue = parseInt(this.scrollBarY) + deltaY
      if(newValue < 0) {
        newValue = 0
      } else if (newValue > this.maxScrollHeight) {
        newValue = this.maxScrollHeight;
      }
      return newValue;
    },
    // 鼠标按下滚动条
    onMouseDownScrollBar(e) {
      this.isScrolling = true
      let {screenX: x, screenY: y} = e
      this.startPosition = [x, y]
    },
    // 拖动滚动条
    onMouseMoveScrollbar(e) {
      if(!this.isScrolling) {return;}
      this.endPosition = [ e.screenX, e.screenY ]
      let deltaY = this.endPosition[1] - this.startPosition[1]
      // 用于限制scrollBarY
      this.scrollBarY = this.calcScrollBarY(deltaY)
      // contantY(内容滚动距离) / parentHeight(内容器的高) = scrollBarY(滚动条滚动距离) / barHeight(滚动条高度)
      this.contentY = -(this.parentHeight * this.scrollBarY / this.barHeight)
      // 因为mousemove过程中，translate会保留上次的值，所以基于这个值去做累加就好
      this.startPosition = this.endPosition
      // 为什么要用transform，因为其性能更好
      this.$refs['bar'].style.transform = `translate(0, ${this.scrollBarY}px)`
    },
    // 松开滚动条
    onMouseUpScrollbar(e) {
      this.isScrolling = false
      if( !this.mouseIn ) {
        this.scrollBarVisible = false
      }
    },
    // 去掉文本选中
    onSelectStartScrollBar(e) {
      e.preventDefault();
    },
    // 鼠标悬浮展示滚动条
    onMouseEnter () {
      this.scrollBarVisible = true
      this.mouseIn = true
    },
    onMouseMove () {
      this.mouseIn = true
    },
    onMouseLeave () {
      this.mouseIn = false
      if( !this.isScrolling ) {
        this.scrollBarVisible = false
      }
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
    border: 1px solid;
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
