<template>
  <div class="wrapper">
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
      ]
    }
  },
  methods: {}
}

</script>

<style lang="less" scoped>
</style>