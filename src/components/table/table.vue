<template>
  <div class="koma-table-wrapper">
    <table class="koma-table" :class="{border, compact, striped}">
      <thead>
        <tr>
          <th><input type="checkbox"></th>
          <th v-if="numberVisible">#</th>
          <th v-for="(column, index) in columns" :key="index">
            {{column.text}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in dataSource" :key="index">
          <td><input type="checkbox" @change="onChangeItem(item, index, $event)"></td>
          <td v-if="numberVisible">{{index + 1}}</td>
          <template v-for="(column, idx) in columns">
            <td :key="idx">{{item[column.field]}}</td>
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
      required: true
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
    }
  },
  data() {
    return {

    };
  },

  computed: {},

  created() {},

  methods: {
    onChangeItem(item, index, e){
      this.$emit('selectedChange', {selected: e.target.checked, item, index})
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
