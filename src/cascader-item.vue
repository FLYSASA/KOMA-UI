<template>
  <div class="cascader-item">
    {{ sourceItem.name }}
    <cascader-item v-if="sourceItem.children"
       v-for="i in sourceItem.children"
       :sourceItem="i"></cascader-item>
  </div>
</template>

<script>
export default {
  name: 'cascader-item',
  components: {},
  props: {
    sourceItem: {
      type: Object
    }
  },
  data () {
    return {
    };
  },
  computed: {},
  created () {},
  methods: {}
}

</script>
<style lang='less' scoped>
.cascader-item {
  margin: 10px;
  border: 1px solid red;
}
</style>