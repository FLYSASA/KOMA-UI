<template>
  <div class="koma-crousel" 
    @mouseenter="onMouseEnter" 
    @mouseleave="onMouseLeave"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    >
    <div class="koma-crousel-window">
      <div class="koma-crousel-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="koma-crousel-dots">
      <span @click="select(selectedIndex - 1)">
        <k-icon name="left"></k-icon>
      </span>
      <!-- 不能直接使用$children, 因为他不是响应式的所以不会刷新视图 -->
      <span v-for="n in childrenLength"
      :key="n"
      @click="select(n-1)"
      :data-index="n-1"
      :class="{active: n - 1 === selectedIndex}">
        {{ n }}
      </span>
      <span @click="select(selectedIndex + 1)">
        <k-icon name="right"></k-icon>
      </span>
    </div>
  </div>
</template>

<script>
import KIcon from '../icon';
export default {
  name: 'KomaCarousel',
  components: {
    KIcon
  },
  props: {
    selected: {
      type: String | Number
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    autoPlayDelay: {
      type: Number,
      default: 3000
    }
  },
  data () {
    return {
      childrenLength: 0,
      lastSelectedIndex: null,
      timerId: null
    };
  },
  computed: {
    selectedIndex(){
      let index = this.names.indexOf(this.selected)
      return index === -1 ? 0 : index
    },
    names(){
      return this.carouselItems.map(i => i.name) || []
    },
    carouselItems(){
      return this.$children.filter(vm => vm.$options.name === 'KomaCarouselItem')
    }
  },
  mounted () {
    this.updateChildren()
    this.playAutomatically()
    this.childrenLength = this.carouselItems.length
  },
  // 外面selected值更新后, 需要重新通知每一个子组件新的值
  updated(){
    this.updateChildren()
  },
  methods: {
    onTouchStart(e){
      this.pause()
      if(e.touches.length > 1) {return;}
      // 为什么touches是数组，因为是多点触控
      this.startTouch = e.touches[0]
    },
    onTouchMove(){
      // console.log('边摸边动');
    },
    onTouchEnd(e){
      let endTouch = e.changedTouches[0]
      let {clientX: x1, clientY: y1} = this.startTouch
      let {clientX: x2, clientY: y2} = endTouch

      // 直线斜边距离
      let distance = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2))
      // 纵向距离
      let deltaY = Math.abs(y2 - y1)
      let rate = distance / deltaY
      // 判断是往右在滑，还是在往上滑，通过30°斜角 1/2的比例去判断
      if(rate > 2) {
        if(x2 > x1) {
          // 左滑
          this.select(this.selectedIndex - 1)
        } else {
          // 右滑
          this.select(this.selectedIndex + 1)
        }
      }

      this.$nextTick(()=>{
        this.playAutomatically()
      })

    },
    // 点击下标切换选中
    select(newIndex){
      if( newIndex === -1 ) {
        newIndex = this.names.length - 1
      }
      if (newIndex === this.names.length) {
        newIndex = 0
      }
      // 记录上一次的选中，以便判断是否reverse
      this.lastSelectedIndex = this.selectedIndex
      this.$emit('update:selected', this.names[newIndex])
    },
    playAutomatically() {
      if(!this.autoPlay){return;}
      if(this.timerId) {return;}
      // setInterval在极端情况下，会有问题
      // 用 setTimeout 模拟 setInterval
      let run = ()=>{
        let index = this.names.indexOf(this.getSelected())
        let newIndex = index + 1
        this.select(newIndex)
        this.timerId = setTimeout(run, this.autoPlayDelay)
      }
      this.timerId = setTimeout(run, this.autoPlayDelay)
    },
    onMouseEnter() {
      this.pause()
    },
    onMouseLeave() {
      this.playAutomatically()
    },
    // 暂停
    pause () {
      window.clearTimeout(this.timerId)
      this.timerId = null
    },
    getSelected(){
      let first = this.carouselItems[0]
      return this.selected || first.name
    },
    updateChildren() {
      let selected = this.getSelected()
      // carouselItems是通过查找carousel的子组件name为KomaCarouselItem来的
      this.carouselItems.forEach((vm) => {
        // 新选中的在现在的左边 就是反向的
        // selectedIndex是计算属性，通过计算selected在names里的index值得来
        let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
        // 只有在自动播放的时候才去无缝轮播
        // 保证右向无缝轮播
        if(this.lastSelectedIndex === this.carouselItems.length - 1 && this.selectedIndex === 0){
          reverse = false;
        }
        // 保证左向无缝轮播
        if(this.lastSelectedIndex === 0 && this.selectedIndex === this.carouselItems.length - 1) {
          reverse = true;
        }
        vm.reverse = reverse
        // 这里加nextTick的原因是保证 reverse 在新的选中时是对的
        this.$nextTick(()=>{
          vm.selected = selected
        })
      })
    }
  }
}

</script>
<style lang='less' scoped>
.koma-crousel {
  &-window {
    overflow: hidden;
  }
  &-wrapper {
    width: 100%;
    position: relative;
    display: flex;
  }
  .koma-crousel-dots {
    padding: 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
      width: 20px;
      height: 20px;
      font-size: 12px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background: #ddd;
      margin: 0 8px;
      cursor: pointer;
      &.active {
        background-color: #000;
        color: #fff;
        &:hover {
          cursor: default;
        }
      }
    }
  }
}
</style>