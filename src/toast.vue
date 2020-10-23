<template>
  <div class="wrapper"  :class="computedClass">
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
  </div>
</template> 

<script>
import Vue from 'vue';
export default {
  name: 'KomaToast',
  components: {},
  props: {
    autoClose: {
      type: [Number, Boolean],
      default: 3000,
      validator(val){
        return val === false || typeof val === 'number';
      }
    },
    closeButton: {
      type: Object,
      default(){
        return {
          text: '关闭'
        }
      }
    },
    // 是否支持插入html，风险选项xss攻击等，所以这里默认关闭
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator(val){
        return ['top', 'bottom', 'middle'].indexOf(val) >= 0
      },
    }
  },
  data () {
    return {
    };
  },
  computed: {
    computedClass(){
      return [`position-${this.position}`]
    }
  },
  mounted() {
    this.execAutoClose()
    this.updateStyle()
  },
  created () {},
  methods: {
    updateStyle () {
      this.$nextTick(()=>{
        if( this.$refs['toast'] ){
          let height = this.$refs['toast'].getBoundingClientRect().height
          this.$refs['line'].style.height = `${height}px`
        }
      })
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(()=>{
          this.close();
        }, this.autoClose);
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
      // 这个必须在destroy前面
      this.$emit('close');
      this.$destroy();
    }
  }
}

</script>
<style lang='less' scoped>
@import './css/_var';

@keyframes slide-up {
  0% { opacity: 0; transform: translateY(100%);}
  100% { opacity: 1; transform: translateY(0%);}
}
@keyframes slide-down {
  0% { opacity: 0; transform: translateY(-100%);}
  100% { opacity: 1; transform: translateY(0%);}
}
@keyframes slide-center {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@animation-duration: 300ms;

.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.position-top {
    top: 0;
    .toast {
      animation: slide-down @animation-duration;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      animation: slide-up @animation-duration;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
  &.position-middle{
    top: 50%;
    transform: translate(-50%, -50%);
    .toast {
      animation: slide-center @animation-duration;
    }
  }
}
.toast {
  font-size: @font-size;
  line-height: 1.8;
  min-height: @toast-min-height;
  background: @toast-bg;
  color: #fff;
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