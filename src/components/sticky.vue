<template>
  <div class="koma-sticky" ref="wrapper" :class="computedClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KomaSticky',
  components: {},
  props: {},
  data() {
    return {
      sticky: false
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
    let top = this.getTop()
    window.addEventListener('scroll', ()=>{
      // top为负值时就滚过去了
      if(window.scrollY > top){
        this.sticky = true
      } else {
        this.sticky = false
      }
    })
  },
  created() {
  },
  methods: {
    getTop () {
      let { top } = this.$refs.wrapper.getBoundingClientRect()
      let distance = top + window.scrollY
      return distance;
    }
  },
};
</script>
<style lang='less' scoped>
.koma-sticky {
  &.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
}
</style>
