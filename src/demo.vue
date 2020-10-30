<template>
  <div id="app">
    <g-cascader
      :selected.sync ="selected"
      :datas="cascaderDatas"
      :load-data="loadData"
      popover-height="200px"></g-cascader>
  </div>
</template>

<script>
import Cascader from './cascader'
import db from './defs/db';
// 异步获取
// function ajax1 (id = 0, success, fail) {
//   let timerId = setTimeout(()=>{
//     let result = db.filter(i => i.parent_id === id)
//     success(result)
//   }, 2000)
//   return timerId;
// }
// promise获取
function ajax (id = 0, success, fail) {
  return new Promise((success, fail) => {
    let result = db.filter(i => i.parent_id === id)
    success(result)
  })
}
export default {
  name: 'demo',
  components: {
    'g-cascader': Cascader
  },
  props: {},
  data () {
    return {
      selected: [],
      cascaderDatas: []
    };
  },
  computed: {},
  created () {
    // ajax1(0, (res)=>{
    //   this.cascaderDatas = res
    // })
    ajax(0).then((res)=>{
      this.cascaderDatas = res
    })
  },
  methods: {
    loadData({id}, callback) {
      ajax(id).then((res)=>{
        callback(res)
      })
    }
  }
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