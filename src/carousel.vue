<template>
  <div class="g-carousel">
    <div class="g-carousel-window">
      <div class="g-carousel-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    selected: {
      type: String | Number
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
  },
  data () {
    return {
    };
  },
  updated: {
    
  },
  computed: {},
  mounted () {
    this.updateChildren()
    this.playAutomatically()
  },
  // 外面selected值更新后, 需要重新通知每一个子组件新的值
  updated(){
    this.updateChildren()
  },
  methods: {
    playAutomatically() {
      const names = this.$children.map(i => i.name)
      let index = names.indexOf(this.getSelected())
      // setInterval在极端情况下，会有问题
      // setInterval(() => {
      //   if(index === names.length) {
      //     index = 0
      //   }
      //   this.$emit('update:selected', names[index + 1])
      //   index++
      // }, 3000)

      // 用 setTimeout 模拟 setInterval
      let run = ()=>{
        if( index < 0 ) {
          index = names.length - 1
        }
        let newIndex = index
        this.$emit('update:selected', names[newIndex])
        index--
        setTimeout(run, 3000)
      }
      setTimeout(run, 3000)
    },
    getSelected(){
      let first = this.$children[0]
      return this.selected || first.name
    },
    updateChildren() {
      let selected = this.getSelected()
      this.$children.forEach((vm) =>{
        vm.selected = selected
        const names = this.$children.map(i => i.name)
        let newIndex = names.indexOf(this.getSelected())
        let oldIndex = names.indexOf(vm.name)
        // 新选中的在现在的左边 就是反向的
        vm.reverse = newIndex > oldIndex ? false : true
      })
    }
  }
}

</script>
<style lang='less' scoped>
.g-carousel {
  display: inline-block;
  &-window {
    overflow: hidden;
  }
  &-wrapper {
    position: relative;
    display: flex;
  }
}
</style>