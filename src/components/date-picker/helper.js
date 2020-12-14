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
  getYearMonthDate
}
// 获取年月日
function getYearMonthDate(date){
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()
  return [year, month, day]
}