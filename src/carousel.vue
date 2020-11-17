<template>
  <div class="g-carousel">
    <div class="g-carousel-window">
      <div class="g-carousel-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="g-carousel-dots">
      <!-- 不能直接使用$children, 因为他不是响应式的所以不会刷新视图 -->
      <span v-for="n in childrenLength"
      @click="select(n-1)"
      :class="{active: n - 1 === selectedIndex}">
        {{ n }}
      </span>
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
      childrenLength: 0,
    };
  },
  updated: {
    
  },
  computed: {
    selectedIndex(){
      return this.names.indexOf(this.selected)
    },
    names(){
      return this.$children.map(i => i.name) || []
    }
  },
  mounted () {
    this.updateChildren()
    this.playAutomatically()
  },
  // 外面selected值更新后, 需要重新通知每一个子组件新的值
  updated(){
    this.updateChildren()
  },
  methods: {
    // 点击下标切换选中
    select(index){
      this.$emit('update:selected', this.names[index])
    },
    playAutomatically() {
      let index = this.names.indexOf(this.getSelected())
      // setInterval在极端情况下，会有问题

      // 用 setTimeout 模拟 setInterval
      let run = ()=>{
        if( index < 0 ) {
          index = this.names.length - 1
        }
        let newIndex = index
        this.$emit('update:selected', this.names[newIndex])
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
      this.childrenLength = this.$children.length
      let selected = this.getSelected()
      this.$children.forEach((vm) =>{
        vm.selected = selected
        let newIndex = this.names.indexOf(this.getSelected())
        let oldIndex = this.names.indexOf(vm.name)
        // 新选中的在现在的左边 就是反向的
        vm.reverse = newIndex > oldIndex ? false : true
      })
    }
  }
}

</script>
<style lang='less' scoped>
.g-carousel {
  &-window {
    overflow: hidden;
  }
  &-wrapper {
    width: 100%;
    position: relative;
    display: flex;
  }
  .g-carousel-dots {
    .active {
      color: red;
    }
  }
}
</style>