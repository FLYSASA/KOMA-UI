<template>
  <div class="tabs-item" @click="onClick" :class="{active: active}">
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
  computed: {
  },
  data () {
    return {
      active: false
    };
  },
  mounted(){
    this.eventBus.$on('update:selected', (name)=>{
      this.active = name === this.name
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
  @bg-color: red;
  @active-color: blue;
  .tabs-item {
    padding: 0 1em;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    &.active{
      font-weight: bold;
      color: @active-color;
      background: @bg-color;
    }
  }
</style>