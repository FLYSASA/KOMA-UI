<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'KomaTabsPane',
    components: {},
    inject: ['eventBus'],
    props: {
      name: {
      type: String|Number,
      required: true
    }
    },
    data() {
      return {};
    },
    mounted() {
      this.eventBus.$on('update:selected', (name) => {
        if (name === this.name) {
          console.log(`我${this.name}panel被选中了`)
        } else {
          console.log(`我${this.name}panel没被选中`)
        }
      })
    },
    methods: {}
  }
</script>
<style lang='less' scoped>
</style>