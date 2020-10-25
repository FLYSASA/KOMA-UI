<template>
  <div class="cascader-item">
    <div class="left">
      <div class="label" v-for="item in items" @click="leftSelected = item">
        {{ item.name }}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-item :items="rightItems"></cascader-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cascader-item',
  components: {},
  props: {
    items: {
      type: Array
    }
  },
  data () {
    return {
      leftSelected: null
    };
  },
  computed: {
    rightItems () {
      return this.leftSelected && this.leftSelected.children || null
    }
  },
  created () {},
  methods: {}
}

</script>
<style lang='less' scoped>
.cascader-item {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .left {
    border: 1px solid red;
  }
  .right {
    margin-top: -1px;
  }
}
</style>