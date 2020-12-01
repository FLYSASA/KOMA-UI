<template>
  <div id="app">
    <g-pager :total-page="20" :current-page="4"></g-pager>
  </div>
</template>

<script>
import GPager from '@/components/pager/pager';

export default {
  name: 'ButtonDemo',
  components: {
    GPager
  },
  props: {},
  data () {
    return {
    };
  },
  methods: {},
}

</script>
<style lang="less">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #app {
    margin: 20px;
  }

</style>