<template>
  <div style="border: 1px solid;" class="koma-date-picker-wrapper" ref="dateWrapper">
    <g-popover position="bottom" :container="dateWrapper">
      <g-input type="text"></g-input>
      <template slot="content">
        <div class="koma-date-picker-pop">
          <div class="koma-date-picker-nav">
            <span><g-icon name="double-left"></g-icon></span>
            <span><g-icon name="left"></g-icon></span>
            <span @click="onClickYear">2012年</span>
            <span @click="onClickMonth">8月</span>
            <span><g-icon name="right"></g-icon></span>
            <span><g-icon name="double-right"></g-icon></span>
          </div>
          <div class="koma-date-picker-panels">
            <div v-if="mode==='years'" class="koma-date-picker-content">年</div>
            <div v-else-if="mode === 'month'" class="koma-date-picker-content">月</div>
            <div v-else class="koma-date-picker-content">
              <div :class="c('weekdays')">
                <span v-for="i in 7">
                  {{weekdays[i-1]}}
                </span>
              </div>
              <div :class="c('row')" v-for="i in helper.getRange(1, 6)">
                <span :class="c('col')" v-for="j in helper.getRange(1, 7)">
                  {{visibleDays[(i-1)*7 + j - 1].getDate()}}
                </span>
              </div>
            </div>
          </div>
          <div class="koma-date-picker-actions">
            <button>清除</button>
          </div>
        </div>
      </template>
    </g-popover>
  </div>
</template>

<script>
import GInput from '@/components/input';
import GIcon from '@/components/icon';
import GPopover from '@/components/popover';
import ClickOutside from '@/components/directives/click-outside';
import helper from './helper';
export default {
  name: 'KomaDatePicker',
  directives: {
    ClickOutside
  },
  components: {
    GInput,
    GIcon,
    GPopover,
  },
  props: {},
  data() {
    return {
      mode: 'days',
      value: new Date(),
      helper,
      weekdays: ['一', '二', '三', '四','五','六','日'],
      dateWrapper: null
    };
  },
  computed: {
    visibleDays(){
      // 验证正确性的时候，可以let date = new Date(2020, 0, 30)  随便写个日期去验证，比如这里的2020年1月（月要-1）30号
      let date = this.value
      let first = helper.firstDayOfMonth(date)
      let last = helper.lastDayOfMonth(date)
      let arr = []
      let [year, month, day] = helper.getYearMonthDate(date)
      // getDate() 返回1-31的整数值
      for(let i = first.getDate(); i <= last.getDate(); i++){
        arr.push(new Date(year, month, i))
      }
      let n = first.getDay() === 0 ? 6 : first.getDay() - 1   // getDay返回0-6， 0代表星期天
      let arr2 = []
      for(let i = 0; i < n; i++){
        arr2.push(new Date(year, month, -i))
      }
      arr2 = arr2.reverse()
      console.log(arr2)
      let m = 42 - arr.length - arr2.length
      let arr3 = []
      for(let i = 1; i <= m; i++){
        arr3.push(new Date(year, month + 1, i))
      }
      let arr4 = [...arr2, ...arr, ...arr3]
      console.log(arr4)
      return arr4;
    }
  },
  mounted() {
    this.dateWrapper = this.$refs['dateWrapper']
  },
  methods: {
    c(className) {
      return `koma-date-picker-${className}`
    },
    onClickYear(){
      this.mode = 'years'
    },
    onClickMonth(){
      this.mode = 'month'
    },
  },
};
</script>
<style lang='less' scoped>
.koma-date-picker {
  &-wrapper {
    /deep/ .koma-popover-content-wrapper {
      padding: 0;
    }
  }
}
</style>
