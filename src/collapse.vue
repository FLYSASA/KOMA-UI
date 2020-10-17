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
      active: null,
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
    console.log(this.selected)
    this.eventBus.$emit('change', this.selected)
    this.eventBus.$on('change', (val)=>{
      this.$emit('update:selected', val)
    })
  },

  methods: {},
};
</script>
<style lang='less' scoped>
  @gray: #ddd;
  @border-radius: 4px; 
  .collapse {
    border: 1px solid @gray;
    border-radius: @border-radius;
  }
</style>
