<template>
  <div ref="tabsHead" class="tabs-head">
    <!-- 独立line出来是为了做动画 -->
    <div ref="activeLine" class="active-line"></div>
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KomaTabshead',
  inject: ['eventBus'],
  components: {},
  props: {},
  data () {
    return {
    };
  },
  methods: {},
  mounted(){
    if(this.eventBus) {
      this.eventBus.$on('update:selected', (name)=>{
        this.$children.forEach((child)=>{
          if(child.name === name) {
            let { width } = child.$el.getBoundingClientRect()
            // 相对于parent的left值
            let left = child.$el.offsetLeft
            this.$refs['activeLine'].style.width = `${width}px`
            this.$refs['activeLine'].style.left = `${left}px`
          }
        })
      })
    }
  }
}

</script>
<style lang='less' scoped>
@import '../css/_var';
.tabs-head {
  display: flex;
  height: @tab-height;
  align-items: center;
  justify-content: start;
  position: relative;
  border-bottom: 1px solid @border-color;
  > .actions-wrapper {
    margin-left: auto;
  }
  .active-line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid @active-line-color; 
    transition: all 250ms;
  }
}
</style>