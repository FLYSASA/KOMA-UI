<template>
  <div class="g-slides">
    <div class="g-slides-window">
      <div class="g-slides-wrapper">
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
    }
  },
  data () {
    return {
    };
  },
  updated: {
    
  },
  computed: {},
  mounted () {
    let first = this.$children[0]
    if(!this.selected){
      console.log(first.$options.name)
      let copy = JSON.parse(JSON.stringify(this.selected))
      copy = first.$options.name
    }
    let second = this.$children[1]
    first.visible = true
    setTimeout(()=>{
      first.visible = false
      second.visible = true
    }, 2000)
  },
  methods: {}
}

</script>
<style lang='less' scoped>
.g-slides {
  display: inline-block;
  &-window {
    // display: flex;
  }
  &-wrapper {
    display: flex;
  }
}
</style>