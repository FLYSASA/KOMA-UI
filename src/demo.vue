<template>
  <div id="app">
    <g-cascader
      :selected.sync="selected"
      :datas="cascaderDatas"
      popover-height="200px"></g-cascader>
  </div>
</template>

<script>
import Cascader from './cascader'
import db from './defs/db';
function ajax (id = 0) {
  return db.filter(i => i.parent_id === id)
}
console.log(ajax())
export default {
  name: 'demo',
  components: {
    'g-cascader': Cascader
  },
  props: {},
  data () {
    return {
      selected: [],
      cascaderDatas: ajax()
    };
  },
  computed: {},
  created () {},
  methods: {}
}

</script>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    --font-size: 14px;
  }
  body {
    font-size: var(--font-size)
  }

</style>