const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('存在.', () => {
    expect(Row).to.exist
  })

  it('接收 gutter 属性.', (done) => {
    Vue.component('k-row', Row)
    Vue.component('k-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <k-row gutter="20">
        <k-col :span="12"></k-col>
        <k-col :span="12"></k-col>
      </k-row>
    `
    const vm = new Vue({
      el: div
    })
    setTimeout(()=>{
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
      done();

      vm.$el.remove()
      vm.$destroy()
    }, 0)
  })

  it('接收 align 属性.', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: 'center'
      }
    }).$mount(div)
    const el = vm.$el
    expect(getComputedStyle(el).justifyContent).to.eq('center')
    vm.$el.remove()
    vm.$destroy()
  })
})