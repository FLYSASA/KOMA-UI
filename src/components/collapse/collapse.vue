<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'KomaCollapse',
  components: {},
  props: {
    selected: {
      type: Array,
      default() {
        return []
      }
    },
    single: {
      dafault: false
    },
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide(){
    return {
      eventBus: this.eventBus
    }
  },

  computed: {},

  mounted() {
    // 不能直接修改props
    let selected = JSON.parse(JSON.stringify(this.selected))
    this.eventBus.$emit('change', selected)
    this.eventBus.$on('addChange', (name)=>{
      if(this.single) {
        selected = []
      }
      selected.push(name)
      this.broadcast(selected)
    })
    this.eventBus.$on('removeChange', (name)=>{
      let index = selected.indexOf(name)
      selected.splice(index, 1)
      this.broadcast(selected)
    })
  },

  methods: {
    broadcast(val){
      // 更新sync
      this.$emit('update:selected', val)
      // 更新子组件
      this.eventBus.$emit('change', val)
    }
  },
};
</script>
<style lang='less' scoped>
  @import '../../css/_var';
  .collapse {
    border: 1px solid @gray;
    border-radius: @border-radius;
  }
</style>
