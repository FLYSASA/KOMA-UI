<template>
  <div ref="tabsHead" class="tabs-head">
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
    this.eventBus.$on('update:selected', (name)=>{
      console.log(name)
      this.$children.forEach((child)=>{
        if(child.name === name) {
          let {width, left} = child.$el.getBoundingClientRect()
          console.log(child.$el, width, left)
          this.$refs['activeLine'].style.width = `${width}px`
          this.$refs['activeLine'].style.left = `${left}px`
        }
      })
    })
  }
}

</script>
<style lang='less' scoped>
@tab-height: 40px;
@active-line-color: blue;
.tabs-head {
  display: flex;
  height: @tab-height;
  align-items: center;
  justify-content: start;
  position: relative;
  > .actions-wrapper {
    margin-left: auto;
  }
  .active-line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid @active-line-color; 
  }
}
</style>