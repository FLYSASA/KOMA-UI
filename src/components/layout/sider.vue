<template>
  <transition
    name="slide"
    v-on:leave="leave">
    <div class="koma-sider" v-if="visible">
      <slot></slot>
      <k-button @click="visible = false" class="koma-sider-close-btn" v-if="closeBtnVisible">关闭</k-button>
    </div>
  </transition>
</template>

<script>
import KButton from '../button/button'
export default {
  name: 'KomaSider',
  components: { KButton },
  props: {
    closeBtnVisible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      visible: true
    };
  },
  methods: {
    leave(el, done) {
      const { width } = el.getBoundingClientRect()
      el.style.marginLeft = -width + 'px'
    },
  }
}

</script>
<style lang='less' scoped>
.koma-sider {
  position: relative;
  .koma-sider-close-btn {
    position: absolute;
    top: 0;
    right: 0;
  }
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.5s;
}

// .slide-leave-to {
//   margin-left: -200px;
// }
</style>