<template>
  <div class="popover" @click.stop="click">
    <div class="content-wrapper"  @click.stop v-if="visible">
      <slot name="content"></slot>
    </div>
    <slot></slot>
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

  created() {},

  methods: {
    click() {
      this.visible = !this.visible
      if(this.visible){
        // 不加延时的话 冒泡机制会立刻转成false
        setTimeout(()=>{
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
    .content-wrapper {
      position: absolute;
      left: 0;
      bottom: 100%;
      border: 1px solid green;
      box-shadow: 0 0 3px rgba(0,0,0,0.5);
    }
  }
</style>
