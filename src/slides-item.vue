<template>
  <transition name="slide">
    <div class="g-slides-item" v-if="visible">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    name: {
      type: String | Number,
      required: true
    }
  },
  data () {
    return {
      selected: '',
    };
  },
  computed: {
    visible() {
      return this.name === this.selected;
    }
  },
  created () {},
  methods: {}
}

</script>
<style lang='less' scoped>
// 动画
.slide-enter-active, .slide-leave-active {
  transition: all 1s;
}
// 这里绝对定位的目的是为了让走的那个不占位置
.slide-leave-active {
  position:absolute;
  left: 0;
  top: 0;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
.g-slides-item {
  
}
</style>