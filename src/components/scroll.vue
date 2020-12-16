<template>
  <div ref="parent" class="koma-scroll-wrapper">
    <div ref="child" class="koma-scroll">
      <slot></slot>
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
    })
  },
  methods: {},
};
</script>
<style lang='less' scoped>
.koma-scroll {
  border: 5px solid green;
  transition: transform 0.05s ease;
  &-wrapper {
    border: 5px solid red;
    overflow: hidden;
  }
}
</style>
