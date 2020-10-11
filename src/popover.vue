<template>
  <div class="popover" @click.stop="clickPopover">
    <div ref="content" class="content-wrapper" v-show="visible"  @click="xxx">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'KomaPopover',
  components: {},
  data() {
    return {
      visible: false
    };
  },

  computed: {},

  mounted() {
    console.log(this.$refs['triggerWrapper'])
  },

  methods: {
    xxx () {
      console.log('xxx')
    },
    // 重新定位，避免overflow: hidden;的问题
    updateStyle () {
      let contentEl = this.$refs['content']
      // 需要先挂载到页面上，才能设样式
      document.body.appendChild(contentEl)
      let triggerWrapper = this.$refs['triggerWrapper']
      let { left, top } = triggerWrapper.getBoundingClientRect()
      console.log(left, top)
      // 加入window.scroll的意义在于会出现横纵向滚动条的情况，因为这里定位是相对于body, 而left的只是相对于视窗
      contentEl.style.left = left + + window.scrollX + 'px';
      contentEl.style.top = top + window.scrollY + 'px';

    },
    clickPopover () {
      this.visible = !this.visible
      if(this.visible){
        // 不加延时的话 冒泡机制会立刻转成false
        setTimeout(()=>{
          this.updateStyle()
          let errorHandler = ()=>{
            this.visible = false
            // 不清楚的话会一直累积，当false掉时就能移除掉上一个监听器了
            document.removeEventListener('click', errorHandler)
          }
          document.addEventListener('click', errorHandler)
        })
      }
    }
  },
};
</script>
<style lang='less' scoped>
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper {
    position: absolute;
    border: 1px solid green;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    transform: translateY(-100%)
  }
</style>
