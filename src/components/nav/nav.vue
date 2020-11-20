<template>
  <div class="nav-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KomaNav',
  components: {},
  props: {
    selected: {
      type: Array,
      default(){
        return [];
      }
    },
    multiple: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {

    };
  },
  computed: {
    items(){
      return this.$children.filter(vm => vm.$options.name === 'KomaNavItem')
    }
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
    updateChildren(){
      // 更新选中的值
      this.items.forEach(vm => {
        if(this.selected.indexOf(vm.name) > -1) {
          vm.selected = true
        } else {
          vm.selected = false
        }
      })
    },
    listenToChildren(){
      // 监听子组件的点击事件
      this.items.forEach(vm => {
        vm.$on('add:selected', (name)=>{
          if(this.selected.indexOf(name) < 0) {
            // 不要直接修改传入的prop
            if(this.multiple){
              let copy  = JSON.parse(JSON.stringify(this.selected))
              copy.push(name)
              this.$emit('update:selected', copy)
            } else {
              this.$emit('update:selected', [name])
            }
          }
        })
      })
    }
  },
};
</script>
<style lang='less' scoped>
.nav-wrapper {
  display: flex;
  align-items: center;
}
</style>
