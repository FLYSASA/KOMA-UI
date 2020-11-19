<template>
  <div class="collapse-item">
    <div class="title" @click="click">
      {{title}}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'KomaCollapseItem',
    components: {},
    props: {
      title: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
    },
    inject: [ 'eventBus' ],
    data() {
      return {
        open: false,
      };
    },
    mounted() {
      this.eventBus && this.eventBus.$on('change', (names)=>{
        if(names.indexOf(this.name) > -1) {
          this.open = true
        } else {
          this.open = false
        }
      })
    },
    methods: {
      click() {
        if(this.open) {
          this.eventBus && this.eventBus.$emit('removeChange', this.name)
        } else {
          this.eventBus && this.eventBus.$emit('addChange', this.name)
        }
      }
    },
  };
</script>
<style lang='less' scoped>
  @import '../css/_var';
  .collapse-item {
    >.title {
      border: 1px solid @gray;
      margin-top: -1px;
      margin-left: -1px;
      margin-right: -1px;
      min-height: 32px;
      display: flex;
      align-items: center;
      padding: 0 8px;
    }
    &:first-child {
      >.title {
        border-top-left-radius: @border-radius;
        border-top-right-radius: @border-radius;
      }
    }
    &:last-child {
      // title是最后一个孩子
      >.title:last-child {
        border-bottom-left-radius: @border-radius;
        border-bottom-right-radius: @border-radius;
        margin-bottom: -1px;
      }
    }
    >.content {
      padding: 0 8px;
    }
  }
</style>