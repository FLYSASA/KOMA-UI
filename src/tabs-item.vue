<template>
  <div class="tabs-item" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KomaTabsItem',
  components: {},
  inject: ['eventBus'],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String|Number,
      required: true
    }
  },
  data () {
    return {
      active: false
    };
  },
  mounted(){
    this.eventBus.$on('update:selected', (name)=>{
      if(name === this.name) {
        console.log(`我${this.name}被选中了`)
      }else{
        console.log(`我${this.name}没被选中`)
      }
    })
  },
  methods: {
    onClick(){
      this.eventBus.$emit('update:selected', this.name)
    }
  }
}

</script>
<style lang='less' scoped>
.tabs-item {
  padding: 0 1em;
}
</style>