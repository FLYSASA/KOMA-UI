<template>
  <div class="koma-table-wrapper">
    <table class="koma-table" :class="{border, compact, striped}">
      <thead>
        <tr>
          <th><input ref="allCheckBox" type="checkbox" @change="onChangeAllItems"></th>
          <th v-if="numberVisible">#</th>
          <th v-for="column in columns" :key="column.field">
            {{column.text}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in dataSource" :key="item.id">
          <td>
            <!-- 这里不用 selectedItems.indexOf(item) 是因为， selectedItems里的对象都是经过深拷贝追加的，已经不再是原来的元素，他们是不等的 -->
            <input type="checkbox"
            :checked="inselectedItems(item)"
            @change="onChangeItem(item, index, $event)">
          </td>
          <td v-if="numberVisible">{{index + 1}}</td>
          <template v-for="column in columns">
            <td :key="column.field">{{item[column.field]}}</td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'KomaTable',
  components: {},
  props: {
    dataSource: {
      type: Array,
      required: true,
      validator(arr){
        // 验证是否含有关键key
        return !(arr.filter(i=> i.id === undefined).length > 0)
      }
    },
    columns: {
      type: Array,
      required: true
    },
    numberVisible: {
      type: Boolean,
      default: false
    },
    // 边框
    border: {
      type: Boolean,
      default: false
    },
    // 是否紧凑型
    compact: {
      type: Boolean,
      default: false
    },
    // 斑马纹
    striped: {
      type: Boolean,
      default: true
    },
    selectedItems: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {

    };
  },
  watch:{
    selectedItems(val){
      if(val.length > 0 && val.length < this.dataSource.length) {
        this.$refs['allCheckBox'].indeterminate = true
      } else if (val.length === this.dataSource.length){
        console.log('1')
        this.$refs['allCheckBox'].indeterminate = false
        this.$refs['allCheckBox'].checked = true
      } else {
        this.$refs['allCheckBox'].indeterminate = false
        this.$refs['allCheckBox'].checked = false
      }
    }
  },
  computed: {},
  created() {
    // console.log(this.selectedItems)
  },

  methods: {
    inselectedItems(item){
      return this.selectedItems.filter(i => i.id === item.id).length > 0
    },
    onChangeAllItems(e){
      let selected = e.target.checked;
      this.$emit('update:selectedItems', selected ? this.dataSource : [])
    },
    onChangeItem(item, index, e){
      let selected = e.target.checked;
      let copy = JSON.parse(JSON.stringify(this.selectedItems))
      if(selected){
        copy.push(item)
      }else{
        copy = copy.filter(i => i.id !== item.id)
      }
      this.$emit('update:selectedItems', copy)
    },
  },
};
</script>
<style lang='less' scoped>
@import 'css/_var';
@grey: darken(@gray, 10%);
.koma-table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-bottom: 1px solid @grey;
  &.border {
    border: 1px solid @grey;
    td, th {
      border: 1px solid @grey;
    }
  }
  &.compact {
    td, th {
      padding: 4px;
    }
  }
  td, th {
    text-align: left;
    border-bottom: 1px solid @grey;
    padding: 8px;
  }
  &.striped {
    tbody {
      > tr {
        &:nth-child(odd) {
          background: white;
        }
        &:nth-child(even) {
          background: lighten(@grey, 12%);
        }
      }
    }
  }
}
</style>
