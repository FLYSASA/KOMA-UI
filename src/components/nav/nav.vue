<template>
  <div class="g-nav" :class="{ vertical }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KomaNav',
  components: {},
  provide(){
    return {
      root: this,
      vertical: this.vertical
    }
  },
  props: {
    selected: {
      type: String,
      default: ''
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      items: [],
      namePath: [],  // 记录多层级选中的值
    };
  },
  computed: {
    // items(){
    //   return this.$children.filter(vm => vm.$options.name === 'KomaNavItem')
    // }
  },
  updated(){
    // 因为父组件props更新后，需要重新触发此事件去判断子组件是否选中
    this.updateChildren()
  },
  mounted() {
    this.updateChildren()
    this.listenToChildren()
  },
  methods: {
    updateNamePath() {
      
    },
    // 使用注入的好处是，让所有子组件自己告诉我它的存在，而不需要我去遍历找子组件
    addItem(vm){
      this.items.push(vm);
    },
    updateChildren(){
      // 更新选中的值
      this.items.forEach(vm => {
        if(this.selected === vm.name) {
          vm.selected = true
        } else {
          vm.selected = false
        }
      })
    },
    listenToChildren(){
      // 监听子组件的点击事件
      this.items.forEach(vm => {
        vm.$on('update:selected', (name)=>{
          if(this.selected !== name ) {
            // 不要直接修改传入的prop
            this.$emit('update:selected', name)
          }
        })
      })
    }
  },
};
</script>
<style lang='less' scoped>
@import 'css/_var';
.g-nav {
  display: flex;
  border-bottom: 1px solid @gray;
  color: @color;
  user-select: none;
  &.vertical {
    flex-direction: column;
    border: 1px solid @gray;
  }

}
</style>
