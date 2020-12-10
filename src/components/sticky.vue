<template>
  <!-- wrapper加height，占位避免抖动 -->
  <div class="koma-sticky-wrapper" ref="wrapper" :style="{ height, width, left }">
    <div class="koma-sticky" :class="computedClasses">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KomaSticky',
  components: {},
  props: {},
  data() {
    return {
      sticky: false,
      top: null,
      left: null,
      width: null,
      height: null,
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
    // 取一次top即可，因为fixed定位后top值会改变，每次重新获取都不一样，这会造成闪烁
    this.top = this.$refs.wrapper.getBoundingClientRect().top
    // 实际上这里可以不用处理，实际测试了下vue可能做了处理，并没有变成window
    // bind 是以防this的指向变为window
    // 不直接window.addEventListener('scroll', this.windowScrollHandler.bind(this)) 的原因是 .bind(this)会产生一个新的函数，这将导致无法移除
    this.windowScrollHandler = this._windowScrollHandler.bind(this)
    window.addEventListener('scroll', this.windowScrollHandler)
  },
  beforeDestroy(){
    window.removeEventListener('scroll', this.windowScrollHandler)
  },
  created() {
  },
  methods: {
    _windowScrollHandler () {
      // top为负值时就滚过去了
      if(window.scrollY > this.top){
        // 改变状态时才去获取高度，保证图片加载时，时间过长获取高度不准确的问题
        let { height, left, width } = this.$refs.wrapper.getBoundingClientRect()
        this.height = height + 'px'
        this.left = left + 'px'
        this.width = width + 'px'
        this.sticky = true
      } else {
        this.sticky = false
      }
    }
  },
};
</script>
<style lang='less' scoped>
.koma-sticky {
  &.sticky {
    position: fixed;
    top: 0;
    // left: 0;
    // width: 100%;
  }
}
</style>
