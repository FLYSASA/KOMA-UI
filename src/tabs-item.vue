<template>
  <div class="tabs-item" @click="onClick"
  :data-name="name"
  :class="{active, disabled}">
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
    if(this.eventBus) {
      this.eventBus.$on('update:selected', (name)=>{
        this.active = name === this.name
      })
    }
  },
  methods: {
    onClick(){
      if(this.disabled) {
        return;
      }
      this.eventBus && this.eventBus.$emit('update:selected', this.name)
      this.$emit('click', this)
    }
  }
}

</script>
<style lang='less' scoped>
  @import './css/var';
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