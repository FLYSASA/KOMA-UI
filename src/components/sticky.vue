<template>
  <!-- wrapper加height，占位避免抖动 -->
  <div class="koma-sticky-wrapper" ref="wrapper" :style="{ height }">
    <div class="koma-sticky" :class="computedClasses" :style="{ top, left, width,  }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KomaSticky',
  components: {},
  props: {
    distance: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      sticky: false,
      top: null,
      left: null,
      width: null,
      height: null,
      timerId: null,
      offsetTop: null,  // 元素距离页面顶部的位置，由初始位置决定
    };
  },
  computed:{
    computedClasses () {
      return {
        sticky: this.sticky
      }
    }
  },
  mounted() {
    // 这个值是元素距离页面顶部的距离，这个值是固定不变的，获取一次就行了
    this.getOffsetTop()
    // 实际上这里可以不用处理，实际测试了下vue可能做了处理，并没有变成window
    // bind 是以防this的指向变为window
    // 不直接window.addEventListener('scroll', this.windowScrollHandler.bind(this)) 的原因是 .bind(this)会产生一个新的函数，这将导致无法移除
    this.windowScrollHandler = this._windowScrollHandler.bind(this)
    window.addEventListener('scroll', this.windowScrollHandler)
  },
  beforeDestroy(){
    window.removeEventListener('scroll', this.windowScrollHandler)
  },
  methods: {
    getOffsetTop () {
      let {top} = this.$refs.wrapper.getBoundingClientRect()
      this.offsetTop = top + window.scrollY
    },
    _windowScrollHandler () {
      let stickyIt = ()=>{
        //  可以这样理解，元素即将滚出视窗范围的临界位置， 应该是 window.scrollY = this.offsetTop(元素距离页面顶部的位置) 超过这个距离即滚过了
        // 现在加上distance，相当于 多滚了一段距离
        if( window.scrollY > this.offsetTop - this.distance){
          // 改变状态时才去获取高度，保证图片加载时，时间过长获取高度不准确的问题
          let { height, left, width } = this.$refs.wrapper.getBoundingClientRect()
          this.height = height + 'px'
          this.left = left + 'px'
          this.width = width + 'px'
          this.top = this.distance + 'px'
          this.sticky = true
        } else {
          this.height = null
          this.left = null
          this.width = null
          this.top = null
          this.sticky = false
        }
      }
      stickyIt();
      // 下面这段代码是防抖，为了sitcky的流畅性，去掉
      // 其实下面这个timerId是一直都有的，因为每次都赋予了新的
      // if(this.timerId) { window.clearTimeout(this.timerId) }
      // this.timerId = setTimeout(stickyIt, 1000);
    }
  },
};
</script>
<style lang='less' scoped>
.koma-sticky {
  &.sticky {
    position: fixed;
    z-index: 9999;
  }
}
</style>
