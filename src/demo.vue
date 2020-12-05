<template>
  <div id="app">
    <div style="margin: 20px">
      <g-table :data-source="tableData" :columns="columns" border
      :orderBy.sync="sortRules"
      @update:orderBy="x"
      :loading="loading"
      @selectedChange="selectedChange"
      :selectedItems.sync="selectedItems"></g-table>
      <g-table style="margin-top: 20px" :data-source="tableData" :columns="columns" border compact :striped="false"></g-table>
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
        { id: 4, name: '安安', score: 100},
        { id: 5, name: '西西', score: 99},
        { id: 6, name: '欧欧', score: 5},
      ],
      columns: [
        {text: '姓名', field: 'name'},
        {text: '分数', field: 'score'},
      ],
      sortRules: {
        score: 'des'
      },
      selectedItems: [],
      loading: false
    };
  },
  watch: {
    selectedItems(val){
      console.log(val)
    }
  },
  methods: {
    selectedChange(obj){
      console.log(obj)
    },
    x(){
      this.loading = true
      setTimeout(()=>{
        this.tableData.sort((a, b) => a.score - b.score)
        this.loading = false
      }, 3000)
    },
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