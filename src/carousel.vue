<template>
  <div class="g-carousel" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
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
      lastSelectedIndex: null,
      timerId: null
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
      // 记录上一次的选中，以便判断是否reverse
      this.lastSelectedIndex = this.selectedIndex
      this.$emit('update:selected', this.names[index])
    },
    playAutomatically() {
      if(this.timerId) {return;}
      // setInterval在极端情况下，会有问题
      // 用 setTimeout 模拟 setInterval
      let run = ()=>{
        let index = this.names.indexOf(this.getSelected())
        let newIndex = index + 1
        if( newIndex === -1 ) {
          newIndex = this.names.length - 1
        }
        if (newIndex === this.names.length) {
          newIndex = 0
        }
        this.select(newIndex)
        this.timerId = setTimeout(run, 3000)
      }
      this.timerId = setTimeout(run, 3000)
    },
    onMouseEnter() {
      this.pause()
    },
    onMouseLeave() {
      this.playAutomatically()
    },
    // 暂停
    pause () {
      window.clearTimeout(this.timerId)
      this.timerId = null
    },
    getSelected(){
      let first = this.$children[0]
      return this.selected || first.name
    },
    updateChildren() {
      this.childrenLength = this.$children.length
      let selected = this.getSelected()
      this.$children.forEach((vm) =>{
        // 新选中的在现在的左边 就是反向的
        let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
        // 只有在自动播放的时候才去无缝轮播
        if (this.timerId) {
          // 保证右向无缝轮播
          if(this.lastSelectedIndex === this.$children.length - 1 && this.selectedIndex === 0){
            reverse = false;
          }
          // 保证左向无缝轮播
          if(this.lastSelectedIndex === 0 && this.selectedIndex === this.$children.length - 1) {
            reverse = true;
          }
        }
        vm.reverse = reverse
        // 这里加nextTick的原因是保证reverse 在新的选中时是对的
        this.$nextTick(()=>{
          vm.selected = selected
        })
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
    padding: 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
      width: 20px;
      height: 20px;
      font-size: 12px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background: #ddd;
      margin: 0 8px;
      cursor: pointer;
      &.active {
        background-color: #000;
        color: #fff;
        &:hover {
          cursor: default;
        }
      }
    }
  }
}
</style>