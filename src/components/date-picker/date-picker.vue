<template>
  <div class="koma-date-picker-wrapper" ref="dateWrapper">
    <k-popover position="bottom" :container="dateWrapper" ref="popover" @open="onOpen">
      <k-input 
        ref="input" 
        type="text" 
        :value="formattedValue"
        placeholder="请选择日期"
        @input="onInput" 
        @change="onchange"></k-input>
      <template slot="content">
        <!-- @selectstart.prevent 取消选择文本事件 -->
        <div class="koma-date-picker-pop" @selectstart.prevent>
          <div class="koma-date-picker-nav">
            <span :class="c('prevYear', 'navItem')" @click="onClickPrevYear"><k-icon name="double-left"></k-icon></span>
            <span :class="c('prevMonth', 'navItem')" @click="onClickPrevMonth"><k-icon name="left"></k-icon></span>
            <span :class="c('yearAndMonth')" @click="onClickMonth">
            	<span>{{ display.year }}年</span>
            	<span>{{ display.month + 1 }}月</span>
            </span>
            <span :class="c('nextMonth', 'navItem')" @click="onClickNextMonth"><k-icon name="right"></k-icon></span>
            <span :class="c('nextYear', 'navItem')" @click="onClickNextYear"><k-icon name="double-right"></k-icon></span>
          </div>
          <div class="koma-date-picker-panels">
            <div class="koma-date-picker-content">
              <template v-if="mode === 'month'">
                <div :class="c('selectMonth')">
                  <div :class="c('selects')">
                    <select @change="onSelectYear" :value="display.year">
                      <option :value="year" v-for="year in years" :key="year">{{ year }}</option>
                    </select>
                    <span class="text">年</span>
                    <select @change="onSelectMonth" :value="display.month">
                      <option :value="month - 1" v-for="month in 12" :key="month">{{month}}</option>
                    </select>
                    <span class="text">月</span>
                  </div>
                  <div :class="c('returnDayMode')" @click.stop>
                    <span @click="mode = 'day'">返回</span>
                  </div>
                </div>
              </template>
              <template v-else>
                <div :class="c('selectWeek')">
                  <div :class="c('weekdays')">
                    <span v-for="i in 7"  :key="i" :class="c('weekday')">
                      {{weekdays[i-1]}}
                    </span>
                  </div>
                  <div :class="c('row')" v-for="i in helper.getRange(1, 6)" :key="i">
                    <span 
                      :class="[c('cell'), 
                        { currentMonth: isCurrentMonth(getVisibleDay(i, j)) }, 
                        { isSelected: isSelected(getVisibleDay(i, j)) },
                        { today: isToday(getVisibleDay(i, j)) }
                        ]" 
                      @click="onClickCell(getVisibleDay(i, j))"
                      v-for="j in helper.getRange(1, 7)" :key="j">
                        {{ getVisibleDay(i, j).getDate() }}
                    </span>
                  </div>
                </div>
              </template>
            </div>
          </div>
          <div class="koma-date-picker-actions">
            <k-button @click="onClickToday">今天</k-button>
            <k-button @click="onClickClear">清除</k-button>
          </div>
        </div>
      </template>
    </k-popover>
  </div>
</template>

<script>
import KInput from '../../../src/components/input';
import KIcon from '../../../src/components/icon';
import KPopover from '../../../src/components/popover';
import KButton from '../../../src/components/button/button'
import ClickOutside from '../../../src/components/directives/click-outside';
import helper from './helper';
export default {
  name: 'KomaDatePicker',
  directives: {
    ClickOutside
  },
  components: {
    KInput,
    KIcon,
    KPopover,
    KButton
  },
  props: {
    value: {
      type: Date,
    },
    scope: {
      type: Array,
      default: () => [new Date(1900, 0, 1), helper.addYear(new Date(), 100)]
    }
  },
  data() {
    let [ year, month ] = helper.getYearMonthDate(this.value || new Date())
    return {
      mode: 'day',
      helper,
      weekdays: ['一', '二', '三', '四','五','六','日'],
      dateWrapper: null,
      // 要展示的日期，默认和value 同年同月, 没有value就展示当年当月
      display: { year, month },
    };
  },
  computed: {
    formattedValue(){
      if(!this.value){
        return '';
      }
      const [ year, month, day] = helper.getYearMonthDate(this.value)
      return `${year}-${helper.padLeft(month + 1)}-${helper.padLeft(day)}`
    },
    visibleDays(){
      // 验证正确性的时候，可以let date = new Date(2020, 0, 30)  随便写个日期去验证，比如这里的2020年1月（月要-1）30号
      let date = new Date(this.display.year, this.display.month, 1)
      let first = helper.firstDayOfMonth(date)
      let arr = []
      // getDate() 返回1-31的整数值,  getDay() 返回 0-6 0代表星期日
      let weekDay = first.getDay()  // 算出当月第一天是星期几
      let x = first - (weekDay === 0 ? 6 : weekDay - 1) * 3600 * 24 * 1000  // 计算第一排第一个的天数
      for (let i = 0; i < 42; i++) {
        arr.push(new Date(x + i*3600*24*1000)) // 从第一天每次加一天
      }
      return arr;
    },
    years () {
      return helper.getRange(this.scope[0].getFullYear(), this.scope[1].getFullYear())
    }
  },
  mounted() {
    this.dateWrapper = this.$refs['dateWrapper']
  },
  methods: {
    c(...classNames) {
      return classNames.map(className => `koma-date-picker-${className}`)
    },
    isCurrentMonth(date) {
      let [year1, month1] = helper.getYearMonthDate(date)
      return year1 === this.display.year && month1 === this.display.month
    },
    isToday(date) {
      const [y, m, d] = helper.getYearMonthDate(date)
      const [y1, m1, d1] = helper.getYearMonthDate(new Date)
      return y === y1 && m === m1 && d === d1
    },
    isSelected(date) {
      if(!this.value) {
        return;
      }
      const [y, m, d] = helper.getYearMonthDate(date)
      const [y1, m1, d1] = helper.getYearMonthDate(this.value)
      return y === y1 && m === m1 && d === d1
    },
    getVisibleDay (row, col) {
      return this.visibleDays[(row-1)*7 + col - 1]
    },
    onchange(value) {
      // input 组件的value 和 input value还是有区别的
      // input 组件的value 无法直接修改
      this.$refs['input'].setRawValue(this.formattedValue)
    },
    onInput(value) {
      // 简单的日期匹配，其实很不严谨
      let reg = /^\d{4}-\d{2}-\d{2}$/g
      if(reg.test(value)){
        let [ year, month, day ] = value.split('-')
        month = month - 1;
        year = year - 0; // 转成数值，不然判断是否当年当月无法全等
        this.display = { year, month }
        this.$emit('input', new Date(year, month, day))
        console.log('符合')
      }
    },
    onOpen() {
      this.mode = 'day'
    },
    onClickToday() {
      const [ year, month, day ] = helper.getYearMonthDate(new Date())
      this.display = { year, month }
      this.$emit('input', new Date(year, month, day))
    },
    onClickClear() {
      this.$emit('input', null)
      this.$refs['popover'].close()
    },
    onSelectYear(e) {
      const year = e.target.value - 0
      const d = new Date(year, this.display.month)
      if(d > this.scope[0] && d <= this.scope[1]) {
        this.display.year = year
      } else {
        e.target.value = this.display.year
      }
    },
    onSelectMonth(e) {
      const month = e.target.value - 0
      const d = new Date(this.display.year, month)
      if(d > this.scope[0] && d <= this.scope[1]) {
        this.display.month = month
      } else {
        e.target.value = this.display.month
      }
    },
    onClickCell (date) {
      if(this.isCurrentMonth(date)) {
        this.$emit('input', date)
        this.$refs.popover.close()
      }
    },
    onClickYear () {
      this.mode = 'years'
    },
    onClickMonth () {
      if(this.mode !== 'month') {
        this.mode = 'month'
      } else {
        this.mode = 'day'
      }
    },
    onClickPrevYear(){
      const oldDate = new Date( this.display.year, this.display.month )
      const newDate = helper.addYear(oldDate, -1)
      const [ year, month ] = helper.getYearMonthDate(newDate)
      this.display = { year, month }
    },
    onClickPrevMonth(){
      const oldDate = new Date( this.display.year, this.display.month )
      const newDate = helper.addMonth(oldDate, -1)
      const [ year, month ] = helper.getYearMonthDate(newDate)
      this.display = { year, month }
    },
    onClickNextYear(){
      const oldDate = new Date( this.display.year, this.display.month )
      const newDate = helper.addYear(oldDate, 1)
      const [ year, month ] = helper.getYearMonthDate(newDate)
      this.display = { year, month }
    },
    onClickNextMonth(){
      const oldDate = new Date( this.display.year, this.display.month )
      const newDate = helper.addMonth(oldDate, 1)
      const [ year, month ] = helper.getYearMonthDate(newDate)
      this.display = { year, month }
    },
  },
};
</script>
<style lang='less' scoped>
@import '../../css/_var';
.koma-date-picker {
  &-wrapper {
    /deep/ .koma-popover-content-wrapper {
      z-index: 99;
      padding: 16px;
      border: none;
      &::before {
        border: none;
      }
    }
  }
  &-nav {
    display: flex;
  }
  &-yearAndMonth {
    margin: auto;
  }
  &-navItem {
    cursor: pointer;
    &:hover {
      svg {
        fill: @primary-color;
      }
    }
  }
  &-content {
    font-size: 14px;
  }
  &-navItem, &-cell, &-weekday {
    width: 32px;
    height: 32px;
    display: inline-block;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  &-cell {
    color: @darken-gray;
    border-radius: @border-radius;
    &.currentMonth {
      color: @color;
      &:hover {
        background: @primary-color;
        color: #fff;
        cursor: pointer;
      }
    }
    &.today {
      border: 1px solid @primary-color;
    }
    &.isSelected {
      background: @primary-color;
      color: #fff;
    }
  }
  &-selectMonth {
    width: 224px;
    height: 224px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-actions {
    padding: 8px;
    text-align: right;
  }
  &-returnDayMode {
    span {
      margin-left: 10px;
      cursor: pointer;
      &:hover {
        color: @primary-color;
      }
    }
  }
}
</style>
