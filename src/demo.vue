<template>
  <div id="app">
    <div style="margin: 20px">
      <g-table :data-source="tableData" :columns="columns" border @selectedChange="selectedChange"></g-table>
      <g-table :data-source="tableData" :columns="columns" border compact :striped="false"></g-table>
    </div>
    <div style="margin: 20px">
      <g-pager :total-page="20" :current-page.sync="currentPage"></g-pager>
    </div>
  </div>
</template>

<script>
import GPager from '@/components/pager/pager';
import GTable from '@/components/table/table';

export default {
  name: 'ButtonDemo',
  components: {
    GPager,
    GTable
  },
  props: {},
  data () {
    return {
      currentPage: 1,
      tableData: [
        { id: 1, name: '花花', score: 100},
        { id: 2, name: '大白', score: 99},
        { id: 3, name: '小绿', score: 5},
        { id: 4, name: '花花', score: 100},
        { id: 5, name: '大白', score: 99},
        { id: 6, name: '小绿', score: 5},
      ],
      columns: [
        {text: '姓名', field: 'name'},
        {text: '分数', field: 'score'},
      ]
    };
  },
  methods: {
    selectedChange(obj){
      console.log(obj)
    }
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
  }

</style>