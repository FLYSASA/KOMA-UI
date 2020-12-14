<template>
  <div id="app">
    <g-date-picker></g-date-picker>
  </div>
</template>

<script>
import GDatePicker from '@/components/date-picker/date-picker';

export default {
  name: 'ButtonDemo',
  components: {
    GDatePicker
  },
  
  props: {},
  data () {
    return {
      
    };
  },
  watch: {
  },
  methods: {
    
  },
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
    padding: 200px;
  }

</style>