<template>
  <transition name="slide">
    <div class="g-crousel-item" v-if="visible" :class="{ reverse }">
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
      reverse: false,
    };
  },
  computed: {
    visible() {
      return this.selected === this.name;
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
.slide-enter.reverse {
  transform: translateX(-100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}
.slide-leave-to.reverse {
  transform: translateX(100%);
}
</style>