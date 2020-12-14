<template>
  <div style="border: 1px solid;">
    <g-popover position="bottom">
      <g-input type="text"></g-input>
      <template slot="content">
        <div class="koma-date-picker-pop">
          <div class="koma-date-picker-nav">
            <span><g-icon name="shezhi"></g-icon></span>
            <span><g-icon name="shezhi"></g-icon></span>
            <span @click="onClickYear">2012年</span>
            <span @click="onClickMonth">8月</span>
            <span><g-icon name="shezhi"></g-icon></span>
            <span><g-icon name="shezhi"></g-icon></span>
          </div>
          <div class="koma-date-picker-panels">
            <div v-if="mode==='years'" class="koma-date-picker-content">年</div>
            <div v-else-if="mode === 'month'" class="koma-date-picker-content">月</div>
            <div v-else class="koma-date-picker-content">
              <span v-for="(day, index) in visibleDays" :key="index">
                {{day.getDate()}}
              </span>
            </div>
          </div>
          <div class="koma-date-picker-actions"></div>
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
      value: new Date()
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

  },
  methods: {
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

</style>
