<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KomaTabshead',
  inject: ['eventBus'],
  components: {},
  props: {},
  data () {
    return {
    };
  },
  methods: {},
  created(){
  }
}

</script>
<style lang='less' scoped>
@tab-height: 40px;
.tabs-head {
  display: flex;
  height: @tab-height;
  align-items: center;
  justify-content: start;
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>