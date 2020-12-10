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
    // 取一次top即可
    let { top } = this.$refs.wrapper.getBoundingClientRect()
    window.addEventListener('scroll', ()=>{
      // top为负值时就滚过去了
      if(window.scrollY > top){
        // 改变状态时才去获取高度，保证图片加载时，时间过长获取高度不准确的问题
        let { height, left, width } = this.$refs.wrapper.getBoundingClientRect()
        this.height = height + 'px'
        this.left = left + 'px'
        this.width = width + 'px'
        this.sticky = true
        console.log('hi')
      } else {
        this.sticky = false
      }
    })
  },
  created() {
  },
  methods: {
    getTopAndHeight () {
      let { top, height } = this.$refs.wrapper.getBoundingClientRect()
      return {top: top + window.scrollY,  height };
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
