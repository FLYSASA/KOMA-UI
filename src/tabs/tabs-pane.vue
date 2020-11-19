<template>
  <div class="tabs-pane" v-if="active">
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
      return {
        active: false
      };
    },
    mounted() {
      if(this.eventBus) {
        this.eventBus.$on('update:selected', (name) => {
          this.active = name === this.name
        })
      }
    },
    methods: {}
  }
</script>
<style lang='less' scoped>
</style>