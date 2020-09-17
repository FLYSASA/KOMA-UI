<template>
  <div class="toast" ref="toast">
    <div class="message-wrapper">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default"></div>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onclickClose">
      {{ closeButton.text }}
    </span>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'KomaToast',
  components: {},
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 3
    },
    closeButton: {
      type: Object,
      default(){
        return {
          text: '关闭'
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    };
  },
  computed: {},
  mounted() {
    this.execAutoClose()
    this.updateStyle()
  },
  created () {},
  methods: {
    updateStyle () {
      this.$nextTick(()=>{
        let height = this.$refs['toast'].getBoundingClientRect().height
        this.$refs['line'].style.height = `${height}px`
      })
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(()=>{
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    onclickClose(){
      this.close()
      if(this.closeButton.callback && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this)
      }
    },
    close() {
      this.$el.remove();
      this.$destroy();
    }
  }
}

</script>
<style lang='less' scoped>
@font-size: 14px;
@toast-min-height: 40px;
@toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  font-size: @font-size;
  line-height: 1.8;
  min-height: @toast-min-height;
  background: @toast-bg;
  color: #fff;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
  border-radius: 4px;
  .message-wrapper {
    padding: 8px 0;
  }
  .close {
    flex-shrink: 0;
    cursor: pointer;
  }
  .line {
    border-left: 1px solid #666;
    margin: 0 16px;
  }
}
</style>