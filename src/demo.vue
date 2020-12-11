<template>
  <div id="app" style="display: flex; justify-content: center;">
    <div style="width: 600px; border: 1px solid red;">
      <g-sticky :distance="100">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GhcDzDyr_yvRAr4rkSR2p3M5NedTq4gLjU42GqB61FbccsfnSPoIT5VxYg&usqp=CAc" alt="">
      </g-sticky>
    </div>
  </div>
</template>

<script>
import GSticky from '@/components/sticky';

export default {
  name: 'demo',
  components: {
    GSticky
  },
  props: {},
  data () {
    return {};
  },
  watch: {},
  methods: {},
}

</script>
<style lang="less">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul, li {
    list-style: none;
  }
  .box{
    border: 1px solid red;
  }

</style>