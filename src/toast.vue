<template>
  <div class="toast">
    <slot></slot>
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
    }
  },
  data () {
    return {
    };
  },
  computed: {},
  mounted() {
    if (this.autoClose) {
      setTimeout(()=>{
        // this.close();
      }, this.autoCloseDelay * 1000);
    }
  },
  created () {},
  methods: {
    onclickClose(){
      this.close()
      if(this.closeButton.callback && typeof(this.closeButton.callback) === 'function') {
        this.closeButton.callback()
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
@toast-height: 40px;
@toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  font-size: @font-size;
  line-height: 1.8;
  height: @toast-height;
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

  .close {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      height: 100px;
      border-left: 1px solid red;
    }
  }
}
</style>