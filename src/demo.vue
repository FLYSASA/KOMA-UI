<template>
  <div id="app">
    <div style="margin: 20px">
      <k-table :data-source="tableData" border
      expand-key="description"
      :height="400"
      :orderBy.sync="sortRules"
      checkable
      @update:orderBy="x"
      :loading="loading"
      @selectedChange="selectedChange"
      :selectedItems.sync="selectedItems">
      
        <k-table-column prop="name" text="姓名" :width="100">
          <template slot-scope="scope">
            <span>{{scope.row.name}}</span>
          </template>
        </k-table-column>

        <k-table-column prop="score" text="分数">
          <template slot-scope="scope">
            <span>{{scope.row.score}}</span>
          </template>
        </k-table-column>

      </k-table>
    </div>
    <div style="margin: 20px">
      <k-pager :total-page="20" :current-page.sync="currentPage"></k-pager>
    </div>
  </div>
</template>

<script>
import KPager from '@/components/pager/pager';
import KTable from '@/components/table/table';
import KTableColumn from '@/components/table/table-column'

export default {
  name: 'ButtonDemo',
  components: {
    KPager,
    KTable,
    KTableColumn
  },
  props: {},
  data () {
    return {
      currentPage: 1,
      tableData: [
        { id: 1, name: '花花', score: 100, description: '展示一段描述'},
        { id: 2, name: '大白', score: 99},
        { id: 3, name: '小绿', score: 5},
        { id: 4, name: '安安', score: 100},
        { id: 5, name: '西西', score: 99},
        { id: 6, name: '欧欧', score: 5},
        { id: 7, name: '小绿', score: 5},
        { id: 8, name: '安安', score: 100},
        { id: 9, name: '西西', score: 99},
        { id: 10, name: '欧欧', score: 5},
        { id: 11, name: '小绿', score: 5},
        { id: 12, name: '安安', score: 100},
        { id: 13, name: '西西', score: 99},
        { id: 14, name: '欧欧', score: 5},
        { id: 15, name: '小绿', score: 5},
        { id: 16, name: '安安', score: 100},
        { id: 17, name: '西西', score: 99},
        { id: 18, name: '欧欧', score: 5},
        { id: 19, name: '小绿', score: 5},
        { id: 20, name: '安安', score: 100},
      ],
      // columns: [
      //   {text: '姓名', prop: 'name', width: 200},
      //   {text: '分数', prop: 'score'},
      // ],
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