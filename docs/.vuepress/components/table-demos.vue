<template>
  <div class="wrapper table-demo">
    <demos-component
      name="基础用法"
      demokey="0"
      description="data-source设置数据源。"
      :codeStr="codeStr1">
      <template v-slot:code>
        <k-table :data-source="dataSource" :height="400">
          <k-table-column text="姓名" prop="name" width="200"></k-table-column>
          <k-table-column text="最爱" prop="favorite"></k-table-column>
        </k-table>
      </template>
    </demos-component>
    <demos-component
      name="不显示斑马纹"
      demokey="1"
      description="斑马纹是默认显示的，可以设置striped属性为false，来不显示斑马纹。"
      :codeStr="codeStr2">
      <template v-slot:code>
        <k-table :data-source="dataSource" :striped="false" :height="400">
          <k-table-column text="姓名" prop="name" width="200"></k-table-column>
          <k-table-column text="最爱" prop="favorite"></k-table-column>
        </k-table>
      </template>
    </demos-component>
    <demos-component
      name="序号和边框显示"
      demokey="2"
      description="你可以通过传入 numberVisible 和 border 属性来控制序号和边框的显示。"
      :codeStr="codeStr3">
      <template v-slot:code>
        <k-table :data-source="dataSource" :height="400"
        numberVisible :border="false">
          <k-table-column text="姓名" prop="name" width="200"></k-table-column>
          <k-table-column text="最爱" prop="favorite"></k-table-column>
        </k-table>
      </template>
    </demos-component>
    <demos-component
      name="紧凑型表格"
      demokey="3"
      description="compact为true时，会显示更紧凑的表格。"
      :codeStr="codeStr4">
      <template v-slot:code>
        <k-table :data-source="dataSource" :height="400" compact>
          <k-table-column text="姓名" prop="name" width="200"></k-table-column>
          <k-table-column text="最爱" prop="favorite"></k-table-column>
        </k-table>
      </template>
    </demos-component>
    <demos-component
      name="表格多选"
      demokey="4"
      description="选择多行数据时使用 Checkbox。"
      :codeStr="codeStr5">
      <template v-slot:code>
        <k-table :data-source="dataSource" :height="400"
        checkable
        :selectedItems.sync="selectedItems"
        >
          <k-table-column text="姓名" prop="name" width="200"></k-table-column>
          <k-table-column text="最爱" prop="favorite"></k-table-column>
        </k-table>
      </template>
    </demos-component>
    <demos-component
      name="表格排序"
      demokey="5"
      description="对表格进行排序，可快速查找或对比数据。"
      :codeStr="codeStr6">
      <template v-slot:code>
        <k-table :data-source.sync="dataSource1" :height="400" striped
        :loading="loading"
        :orderBy.sync="sortRules"
        @update:orderBy="updateSourse"
        >
          <k-table-column text="姓名" prop="name" width="200"></k-table-column>
          <k-table-column text="最爱" prop="favorite" width="300"></k-table-column>
          <k-table-column text="可爱值" prop="lovelyValue"></k-table-column>
        </k-table>
      </template>
    </demos-component>
    <demos-component
      name="展开行"
      demokey="6"
      description="当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。"
      :codeStr="codeStr7">
      <template v-slot:code>
        <k-table :data-source.sync="dataSource2" :height="400" striped
        expand-key="description"
        >
          <k-table-column text="姓名" prop="name" width="200"></k-table-column>
          <k-table-column text="最爱" prop="favorite" width="300"></k-table-column>
          <k-table-column text="可爱值" prop="lovelyValue"></k-table-column>
        </k-table>
      </template>
    </demos-component>
    <demos-component
      name="操作列"
      demokey="7"
      description="可以加入action操作列，对数据进行修改。"
      :codeStr="codeStr8">
      <template v-slot:code>
        <k-table :data-source.sync="dataSource3" :height="400">
          <k-table-column text="姓名" prop="name" width="200"></k-table-column>
          <k-table-column text="最爱" prop="favorite" width="200"></k-table-column>
          <k-table-column text="可爱值" prop="lovelyValue" width="100"></k-table-column>
          <template #action="scope">
            <span class="opre-btn" @click="editItem(scope.row)">编辑</span>
            <span class="opre-btn" @click="deleteItem(scope.$index)">删除</span>
          </template>
        </k-table>
      </template>
    </demos-component>
  </div>
</template>

<script>
import Table from '../../../src/components/table/table';
import TableColumn from '../../../src/components/table/table-column';
import demosComponent from './demos-component.vue';

export default {
  name: 'KomaTableDemo',
  components: {
    demosComponent,
    'k-table': Table,
    'k-table-column': TableColumn,
  },
  props: {},
  watch: {
    selectedItems(val){
      console.log(val)
    }
  },
  data () {
    return {
      codeStr1: `
        <k-table :data-source="dataSource" :height="400">
          <k-table-column text="姓名" prop="name" width="200"></k-table-column>
          <k-table-column text="最爱" prop="favorite"></k-table-column>
        </k-table>

        data() {
          return {
            dataSource:[
              { id: 1, name: '花猫', favorite: '花'},
              { id: 2, name: '白猫', favorite: '大白菜'},
              { id: 3, name: '小猫', favorite: '小白'},
              { id: 4, name: '波斯猫', favorite: '毛球'},
              { id: 5, name: '卷猫', favorite: '卷子'},
              { id: 6, name: '卡西欧', favorite: '卡卡'},
              { id: 7, name: '绿猫', favorite: '绿帽'},
              { id: 8, name: '狗的猫宁', favorite: '安安'},
              { id: 9, name: '奋斗的小猫', favorite: '奋斗'},
              { id: 10, name: '努力的小猫', favorite: '努力'},
              { id: 11, name: '勤奋的小猫', favorite: '勤奋'},
              { id: 12, name: '上进的小猫', favorite: '上进'},
              { id: 13, name: '好学的小猫', favorite: '学习'},
              { id: 14, name: '勤劳的小猫', favorite: '劳动'},
              { id: 15, name: '可爱的小猫', favorite: '撒娇'},
            ],
          }
        }
      `,
      codeStr2: `
        <k-table :data-source="dataSource" :striped="false" :height="400">
          <k-table-column text="姓名" prop="name" width="200"></k-table-column>
          <k-table-column text="最爱" prop="favorite"></k-table-column>
        </k-table>
      `,
      codeStr3: `
        <k-table :data-source="dataSource" :height="400"
          numberVisible :border="false">
          <k-table-column text="姓名" prop="name" width="200"></k-table-column>
          <k-table-column text="最爱" prop="favorite"></k-table-column>
        </k-table>
      `,
      codeStr4: `
        <k-table :data-source="dataSource" :height="400" compact>
          <k-table-column text="姓名" prop="name" width="200"></k-table-column>
          <k-table-column text="最爱" prop="favorite"></k-table-column>
        </k-table>
      `,
      codeStr5: `
        <k-table :data-source="dataSource" :height="400"
          checkable :selectedItems.sync="selectedItems">
          <k-table-column text="姓名" prop="name" width="200"></k-table-column>
          <k-table-column text="最爱" prop="favorite"></k-table-column>
        </k-table>

        data(){
          return {
            dataSource: [
              { id: 1, name: '花猫', favorite: '花'},
              { id: 2, name: '白猫', favorite: '大白菜'},
              { id: 3, name: '小猫', favorite: '小白'},
              { id: 4, name: '波斯猫', favorite: '毛球'},
              { id: 5, name: '卷猫', favorite: '卷子'},
              { id: 6, name: '卡西欧', favorite: '卡卡'},
              { id: 7, name: '绿猫', favorite: '绿帽'},
              { id: 8, name: '狗的猫宁', favorite: '安安'},
              { id: 9, name: '奋斗的小猫', favorite: '奋斗'},
              { id: 10, name: '努力的小猫', favorite: '努力'},
              { id: 11, name: '勤奋的小猫', favorite: '勤奋'},
              { id: 12, name: '上进的小猫', favorite: '上进'},
              { id: 13, name: '好学的小猫', favorite: '学习'},
              { id: 14, name: '勤劳的小猫', favorite: '劳动'},
              { id: 15, name: '可爱的小猫', favorite: '撒娇'},
            ],
            selectedItems: []
          }
        },
        watch: {
          selectedItems(val){
            console.log(val)
          }
        }
      `,
      codeStr6: `
        <k-table :data-source.sync="dataSource1" :height="400"
          :loading="loading"
          :orderBy.sync="sortRules"
          @update:orderBy="updateSourse">
            <k-table-column text="姓名" prop="name" width="200"></k-table-column>
            <k-table-column text="最爱" prop="favorite" width="300"></k-table-column>
            <k-table-column text="可爱值" prop="lovelyValue"></k-table-column>
          </k-table>
        </template>

        data(){
          return {
            dataSource1: [
              { id: 1, name: '花猫', favorite: '花', lovelyValue: '100'},
              { id: 2, name: '白猫', favorite: '大白菜', lovelyValue: '90'},
              { id: 3, name: '小猫', favorite: '小白', lovelyValue: '95'},
              { id: 4, name: '波斯猫', favorite: '毛球', lovelyValue: '80'},
              { id: 5, name: '卷猫', favorite: '卷子', lovelyValue: '75'},
              { id: 6, name: '卡西欧', favorite: '卡卡', lovelyValue: '55'},
              { id: 7, name: '绿猫', favorite: '绿帽', lovelyValue: '85'},
              { id: 8, name: '狗的猫宁', favorite: '安安', lovelyValue: '90'},
              { id: 9, name: '奋斗的小猫', favorite: '奋斗', lovelyValue: '100'},
              { id: 10, name: '努力的小猫', favorite: '努力', lovelyValue: '95'},
              { id: 11, name: '勤奋的小猫', favorite: '勤奋', lovelyValue: '75'},
              { id: 12, name: '上进的小猫', favorite: '上进', lovelyValue: '85'},
              { id: 13, name: '好学的小猫', favorite: '学习', lovelyValue: '95'},
              { id: 14, name: '勤劳的小猫', favorite: '劳动', lovelyValue: '65'},
              { id: 15, name: '可爱的小猫', favorite: '撒娇', lovelyValue: '100'},
            ],
            loading: false,
            sortRules: {
              lovelyValue: 'desc'
            },
          }
        },
        methods: {
          updateSourse(sort){
            this.loading = true 
            setTimeout(()=>{
              if(sort.lovelyValue === 'asc') {
                this.dataSource1.sort((a, b) => a.lovelyValue - b.lovelyValue)
              }else{
                this.dataSource1.sort((a, b) => b.lovelyValue - a.lovelyValue)
              }
              this.loading = false
            }, 1500)
          },
        },
      `,
      codeStr7: `
        <k-table :data-source.sync="dataSource2" :height="400"
          expand-key="description">
          <k-table-column text="姓名" prop="name" width="200"></k-table-column>
          <k-table-column text="最爱" prop="favorite" width="300"></k-table-column>
          <k-table-column text="可爱值" prop="lovelyValue"></k-table-column>
        </k-table>

        data(){
          return {
            dataSource1: [
              { id: 1, name: '花猫', favorite: '花', lovelyValue: '100', description: '花猫的颜色是五彩斑斓的。'},
              { id: 2, name: '白猫', favorite: '大白菜', lovelyValue: '90'},
              { id: 3, name: '小猫', favorite: '白猫', lovelyValue: '95', description: '小猫是所有猫里最小的，它喜欢白猫。'},
              { id: 4, name: '波斯猫', favorite: '毛球', lovelyValue: '80'},
              { id: 5, name: '卷猫', favorite: '卷子', lovelyValue: '75'},
              { id: 6, name: '卡西欧', favorite: '卡卡', lovelyValue: '55'},
              { id: 7, name: '绿猫', favorite: '绿帽', lovelyValue: '85'},
              { id: 8, name: '狗的猫宁', favorite: '安安', lovelyValue: '90'},
              { id: 9, name: '奋斗的小猫', favorite: '奋斗', lovelyValue: '100'},
              { id: 10, name: '努力的小猫', favorite: '努力', lovelyValue: '95'},
              { id: 11, name: '勤奋的小猫', favorite: '勤奋', lovelyValue: '75'},
              { id: 12, name: '上进的小猫', favorite: '上进', lovelyValue: '85'},
              { id: 13, name: '好学的小猫', favorite: '学习', lovelyValue: '95'},
              { id: 14, name: '勤劳的小猫', favorite: '劳动', lovelyValue: '65'},
              { id: 15, name: '可爱的小猫', favorite: '撒娇', lovelyValue: '100'},
            ],
          }
        },
      `,
      codeStr8: `
        <k-table :data-source.sync="dataSource3" :height="400">
          <k-table-column text="姓名" prop="name" width="200"></k-table-column>
          <k-table-column text="最爱" prop="favorite" width="200"></k-table-column>
          <k-table-column text="可爱值" prop="lovelyValue" width="100"></k-table-column>
          <template #action="scope">
            <span class="opre-btn" @click="editItem(scope.row, scope.$index)">编辑</span>
            <span class="opre-btn" @click="deleteItem(scope.$index)">删除</span>
          </template>
        </k-table>

        data(){
          return {
            dataSource3: [
              { id: 1, name: '花猫', favorite: '花', lovelyValue: '100'},
              { id: 2, name: '白猫', favorite: '大白菜', lovelyValue: '90'},
              { id: 3, name: '小猫', favorite: '小白', lovelyValue: '95'},
              { id: 4, name: '波斯猫', favorite: '毛球', lovelyValue: '80'},
              { id: 5, name: '卷猫', favorite: '卷子', lovelyValue: '75'},
              { id: 6, name: '卡西欧', favorite: '卡卡', lovelyValue: '55'},
              { id: 7, name: '绿猫', favorite: '绿帽', lovelyValue: '85'},
              { id: 8, name: '狗的猫宁', favorite: '安安', lovelyValue: '90'},
              { id: 9, name: '奋斗的小猫', favorite: '奋斗', lovelyValue: '100'},
              { id: 10, name: '努力的小猫', favorite: '努力', lovelyValue: '95'},
              { id: 11, name: '勤奋的小猫', favorite: '勤奋', lovelyValue: '75'},
              { id: 12, name: '上进的小猫', favorite: '上进', lovelyValue: '85'},
              { id: 13, name: '好学的小猫', favorite: '学习', lovelyValue: '95'},
              { id: 14, name: '勤劳的小猫', favorite: '劳动', lovelyValue: '65'},
              { id: 15, name: '可爱的小猫', favorite: '撒娇', lovelyValue: '100'},
            ],
          }
        },

        methods: {
          editItem(item) {
            console.log(item)
          },
          deleteItem(item, index){
            this.dataSource3.splice(index, 1)
          }
        }
      `,
      dataSource: [
        { id: 1, name: '花猫', favorite: '花'},
        { id: 2, name: '白猫', favorite: '大白菜'},
        { id: 3, name: '小猫', favorite: '小白'},
        { id: 4, name: '波斯猫', favorite: '毛球'},
        { id: 5, name: '卷猫', favorite: '卷子'},
        { id: 6, name: '卡西欧', favorite: '卡卡'},
        { id: 7, name: '绿猫', favorite: '绿帽'},
        { id: 8, name: '狗的猫宁', favorite: '安安'},
        { id: 9, name: '奋斗的小猫', favorite: '奋斗'},
        { id: 10, name: '努力的小猫', favorite: '努力'},
        { id: 11, name: '勤奋的小猫', favorite: '勤奋'},
        { id: 12, name: '上进的小猫', favorite: '上进'},
        { id: 13, name: '好学的小猫', favorite: '学习'},
        { id: 14, name: '勤劳的小猫', favorite: '劳动'},
        { id: 15, name: '可爱的小猫', favorite: '撒娇'},
      ],
      dataSource1: [
        { id: 1, name: '花猫', favorite: '花', lovelyValue: '100'},
        { id: 2, name: '白猫', favorite: '大白菜', lovelyValue: '90'},
        { id: 3, name: '小猫', favorite: '小白', lovelyValue: '95'},
        { id: 4, name: '波斯猫', favorite: '毛球', lovelyValue: '80'},
        { id: 5, name: '卷猫', favorite: '卷子', lovelyValue: '75'},
        { id: 6, name: '卡西欧', favorite: '卡卡', lovelyValue: '55'},
        { id: 7, name: '绿猫', favorite: '绿帽', lovelyValue: '85'},
        { id: 8, name: '狗的猫宁', favorite: '安安', lovelyValue: '90'},
        { id: 9, name: '奋斗的小猫', favorite: '奋斗', lovelyValue: '100'},
        { id: 10, name: '努力的小猫', favorite: '努力', lovelyValue: '95'},
        { id: 11, name: '勤奋的小猫', favorite: '勤奋', lovelyValue: '75'},
        { id: 12, name: '上进的小猫', favorite: '上进', lovelyValue: '85'},
        { id: 13, name: '好学的小猫', favorite: '学习', lovelyValue: '95'},
        { id: 14, name: '勤劳的小猫', favorite: '劳动', lovelyValue: '65'},
        { id: 15, name: '可爱的小猫', favorite: '撒娇', lovelyValue: '100'},
      ],
      dataSource2: [
        { id: 1, name: '花猫', favorite: '花', lovelyValue: '100', description: '花猫的颜色是五彩斑斓的。'},
        { id: 2, name: '白猫', favorite: '大白菜', lovelyValue: '90'},
        { id: 3, name: '小猫', favorite: '白猫', lovelyValue: '95', description: '小猫是所有猫里最小的，它喜欢白猫。'},
        { id: 4, name: '波斯猫', favorite: '毛球', lovelyValue: '80'},
        { id: 5, name: '卷猫', favorite: '卷子', lovelyValue: '75'},
        { id: 6, name: '卡西欧', favorite: '卡卡', lovelyValue: '55'},
        { id: 7, name: '绿猫', favorite: '绿帽', lovelyValue: '85'},
        { id: 8, name: '狗的猫宁', favorite: '安安', lovelyValue: '90'},
        { id: 9, name: '奋斗的小猫', favorite: '奋斗', lovelyValue: '100'},
        { id: 10, name: '努力的小猫', favorite: '努力', lovelyValue: '95'},
        { id: 11, name: '勤奋的小猫', favorite: '勤奋', lovelyValue: '75'},
        { id: 12, name: '上进的小猫', favorite: '上进', lovelyValue: '85'},
        { id: 13, name: '好学的小猫', favorite: '学习', lovelyValue: '95'},
        { id: 14, name: '勤劳的小猫', favorite: '劳动', lovelyValue: '65'},
        { id: 15, name: '可爱的小猫', favorite: '撒娇', lovelyValue: '100'},
      ],
      dataSource3: [
        { id: 1, name: '花猫', favorite: '花', lovelyValue: '100'},
        { id: 2, name: '白猫', favorite: '大白菜', lovelyValue: '90'},
        { id: 3, name: '小猫', favorite: '小白', lovelyValue: '95'},
        { id: 4, name: '波斯猫', favorite: '毛球', lovelyValue: '80'},
        { id: 5, name: '卷猫', favorite: '卷子', lovelyValue: '75'},
        { id: 6, name: '卡西欧', favorite: '卡卡', lovelyValue: '55'},
        { id: 7, name: '绿猫', favorite: '绿帽', lovelyValue: '85'},
        { id: 8, name: '狗的猫宁', favorite: '安安', lovelyValue: '90'},
        { id: 9, name: '奋斗的小猫', favorite: '奋斗', lovelyValue: '100'},
        { id: 10, name: '努力的小猫', favorite: '努力', lovelyValue: '95'},
        { id: 11, name: '勤奋的小猫', favorite: '勤奋', lovelyValue: '75'},
        { id: 12, name: '上进的小猫', favorite: '上进', lovelyValue: '85'},
        { id: 13, name: '好学的小猫', favorite: '学习', lovelyValue: '95'},
        { id: 14, name: '勤劳的小猫', favorite: '劳动', lovelyValue: '65'},
        { id: 15, name: '可爱的小猫', favorite: '撒娇', lovelyValue: '100'},
      ],
      selectedItems: [],
      loading: false,
      sortRules: {
        lovelyValue: 'desc'
      },
    }
  },
  methods: {
    updateSourse(sort){
      this.loading = true 
      setTimeout(()=>{
        if(sort.lovelyValue === 'asc') {
          this.dataSource1.sort((a, b) => a.lovelyValue - b.lovelyValue)
        }else{
          this.dataSource1.sort((a, b) => b.lovelyValue - a.lovelyValue)
        }
        this.loading = false
      }, 1500)
    },
    editItem(item) {
      console.log(item)
    },
    deleteItem(item, index){
      this.dataSource3.splice(index, 1)
    }
  }
}

</script>

<style lang="less" scoped>
.table-demo {
  .opre-btn {
    color: #00abd5;
    cursor: pointer;
    user-select: none;
  }
}
</style>