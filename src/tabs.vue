<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'KomaTabs',
  components: {},
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(val){
        return ['horizontal', 'vertical'].indexOf(val) >= 0
      }
    }
  },
  data () {
    return {
      eventBus: new Vue,
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    this.eventBus.$emit('update:selected', this.selected)
  },
  methods: {},
}

</script>
<style lang='less' scoped>
</style>