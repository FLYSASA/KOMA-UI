<template>
  <div id="app">
    <g-pager :total-page="20" :current-page.sync="currentPage"></g-pager>
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
      currentPage: 4
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