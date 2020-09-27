<template>
  <div class="tabs-item" @click="onClick" :class="{active, disabled}">
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
      if(this.disabled) {
        return;
      }
      this.eventBus.$emit('update:selected', this.name)
    }
  }
}

</script>
<style lang='less' scoped>
  @active-color: blue;
  @disabled-text-color: #ddd;
  .tabs-item {
    padding: 0 1em;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    &.active{
      font-weight: bold;
      color: @active-color;
    }
    &.disabled {
      color: @disabled-text-color;
      cursor: not-allowed;
    }
  }
</style>