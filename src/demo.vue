<template>
  <div id="app">
    <div>
      <g-slides>
        <g-slides-item v-for="i in 3" :key="i" :name="i">
          <div class="box">{{ i }}</div>
        </g-slides-item>
      </g-slides>
      <template v-if="false">
        <g-cascader
          :selected.sync ="selected"
          :datas.sync="cascaderDatas"
          :load-data="loadData"
          popover-height="200px"></g-cascader>
      </template>
    </div>
  </div>
</template>

<script>
import GSlides from './slides';
import GSlidesItem from './slides-item';
import Cascader from './cascader'
import db from './defs/db';
import Popover from './popover';
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
    // 给数据加个 isLeaf 属性
    result.forEach(node => {
      if(db.filter(i => i.parent_id === node.id).length > 0) {
        node.isLeaf = false
      } else {
        node.isLeaf = true
      }
    })
    success(result)
  })
}
export default {
  name: 'demo',
  components: {
    'g-cascader': Cascader,
    'g-popover': Popover,
    GSlides,
    GSlidesItem
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
        setTimeout(()=>{
          callback(res)
        }, 2000)
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
  .box {
    width: 200px;
    height: 200px;
    background:#ddd;
    border: 1px solid red;
  }

</style>