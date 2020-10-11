<template>
  <div class="popover" @click="clickPopover">
    <div ref="content" class="content-wrapper" v-if="visible"  @click="xxx">
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
  },

  methods: {
    xxx () {
      // console.log('xxx')
    },
    // 重新定位，避免overflow: hidden;的问题
    positionPopover () {
      let contentEl = this.$refs['content']
      if(!contentEl){return;}
      // 需要先挂载到页面上，才能设样式
      document.body.appendChild(contentEl)
      let triggerWrapper = this.$refs['triggerWrapper']
      let { left, top } = triggerWrapper.getBoundingClientRect()
      // 加入window.scroll的意义在于会出现横纵向滚动条的情况，因为这里定位是相对于body, 而left的只是相对于视窗
      contentEl.style.left = left + + window.scrollX + 'px';
      contentEl.style.top = top + window.scrollY + 'px';

    },
    onClickDocument (e) {
      if(this.$refs['content'] && this.$refs['content'].contains(e.target)) {
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
