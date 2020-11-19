<template>
  <div class="popover" ref="popover">
    <div ref="popoverContent" class="content-wrapper" v-if="visible"
      :class="{[`position-${position}`]:true}">
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block;">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'KomaPopover',
  props:{
    position: {
      type: String,
      default: 'top',
      validator(val){
        return ['top', 'bottom', 'left', 'right'].indexOf(val) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(val){
        return ['click', 'hover'].indexOf(val) >= 0
      }
    }
  },
  data() {
    return {
      visible: false
    };
  },

  computed: {},

  mounted() {
    if(this.trigger === 'click'){
      this.$refs['popover'].addEventListener('click', this.clickPopover)
    } else {
      this.$refs['popover'].addEventListener('mouseenter', this.open)
      this.$refs['popover'].addEventListener('mouseleave', this.close)
    }
  },

  beforeDestroy() {
    if(!this.$refs['popover']){return;}
    if(this.trigger === 'click'){
      this.$refs['popover'].removeEventListener('click', this.clickPopover)
    } else {
      this.$refs['popover'].removeEventListener('mouseenter', this.open)
      this.$refs['popover'].removeEventListener('mouseleave', this.close)
    }
  },

  methods: {
    // 重新定位，避免overflow: hidden;的问题
    positionPopover () {
      const { popoverContent, triggerWrapper } = this.$refs
      if(!popoverContent){return;}
      // 需要先挂载到页面上，才能设样式
      document.body.appendChild(popoverContent)

      const { left, top, height, width } = triggerWrapper.getBoundingClientRect()
      const { height: height2 } = popoverContent.getBoundingClientRect()

      let positions = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX
        },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX,
        },
        left: {
          top: top + window.scrollY + (height - height2)/2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height - height2)/2,
          left: left + width + window.scrollX
        }
      }
      popoverContent.style.left = positions[this.position].left + 'px'
      popoverContent.style.top = positions[this.position].top + 'px';

    },
    onClickDocument (e) {
      if(this.$refs['popoverContent'] && this.$refs['popoverContent'].contains(e.target)) {
          return;
      }
      this.close()
    },
    listenToDocument(){
      document.addEventListener('click', this.onClickDocument)
    },
    clickPopover (e) {
      // 点的触发器的话就关闭popover, 点popover内容不关闭
      if(this.$refs['triggerWrapper'].contains(e.target)) {
        if(this.visible) {
          this.close()
        }else{
          this.open()
        }
      }
    },
    close() {
      this.visible = false
      // 每次关闭都要清除上一次的监听器，不然open的时候又会添加一个监听器
      document.removeEventListener('click', this.onClickDocument)
    },
    open () {
      this.visible = true
      // 不加延时的话 冒泡机制会立刻转成false
      setTimeout(()=>{
        this.positionPopover()
        // 给document加上监听事件，是为了能点body关闭掉popover
        this.listenToDocument()
      })
    }
  },
};
</script>
<style lang='less' scoped>
  @import './css/_var';
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper {
    position: absolute;
    border: 1px solid @color;
    border-radius: @border-radius;
    // box-shadow: 0 0 3px rgba(0,0,0,0.5);
    filter: drop-shadow(0 0 3px rgba(0,0,0,0.5));
    background: white;
    padding: .5em 1em;
    max-width: 50em;
    word-break: break-all;
    &::before, &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      position: absolute;
    }
    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;
      &::before{
        border-top-color: black;
        border-bottom: none;
        top: 100%;
        left: 10px;
      }
      &::after{
        border-top-color: #fff; 
        border-bottom: none;
        top: calc(100% - 1px);
        left: 10px;
      }
    }

    &.position-bottom {
      margin-top: 10px;
      &::before{
        border-bottom-color: black;
        border-top: none;
        bottom: 100%;
        left: 10px;
      }
      &::after{
        border-bottom-color: #fff;
        border-top: none;
        bottom: calc(100% - 1px);
        left: 10px;
      }
    }

    &.position-left {
      margin-left: -10px;
      transform: translateX(-100%);
      &::before{
        border-left-color: black; 
        border-right: none;
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
      }
      &::after{
        border-left-color: #fff;
        border-right: none;
        top: 50%;
        left: calc(100% - 1px);
        transform: translateY(-50%);
      }
    }

    &.position-right {
      margin-left: 10px;
      &::before{
        border-right-color: black;
        border-left: none;
        top: 50%;
        right: 100%;
        transform: translateY(-50%);
      }
      &::after{
        border-right-color: #fff;
        border-left: none;
        top: 50%;
        right: calc(100% - 1px);
        transform: translateY(-50%);
      }
    }
  }
</style>
