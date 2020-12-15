export default {
  // 获取当月第一天
  firstDayOfMonth(date){
    let [year, month, day] = getYearMonthDate(date)
    return new Date(year, month, 1)
  },
  // 获取当月最后一天
  lastDayOfMonth(date){
    let [year, month, day] = getYearMonthDate(date)
    return new Date(year, month + 1, 0)
  },
  getRange(begin, end){
    let arr = []
    for(let i = begin; i <= end; i++){
      arr.push(i)
    }
    return arr;
  },
  addMonth(date, n){
    const [_1, month, _2] = getYearMonthDate(date)
    const newMonth = month + n
    const copy = new Date(date)
    copy.setMonth(newMonth) // 返回基于 1 January 1970 00:00:00 UTC 开始计算的毫秒数
    return copy;
  },
  addYear(date, n) {
    const [year] = getYearMonthDate(date)
    const newYear = year + n
    const copy = new Date(date)
    copy.setFullYear(newYear)
    return copy;
  },
  // 两位数0补位
  padLeft(number) {
    if(typeof number !== 'number') {
      throw new Error('wrong param')
    }
    return ( number >= 10 ? '' : '0' ) + number
  },
  getYearMonthDate
}
// 获取年月日
function getYearMonthDate(date){
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()
  return [year, month, day]
}