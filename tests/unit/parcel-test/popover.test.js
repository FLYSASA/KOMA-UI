const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.exist
  })
  it('可以设置 position', (done) => {
    Vue.component('k-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <k-popover position="bottom" ref="popoverTest">
        <template #content">
          <div>弹出内容</div>
        </template>
        <button>点我</button>
      </k-popover>
    `
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(()=>{
      vm.$el.querySelector('button').click()
      vm.$nextTick(()=>{
        const popoverContentEl = vm.$refs.popoverTest.$refs['popoverContent']
        expect(popoverContentEl.classList.contains('position-bottom')).to.be.true
        done()
      })
    })
  })
  xit('可以设置 trigger', (done) => {
    Vue.component('k-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <k-popover trigger="hover" ref="popoverTest2">
        <template #content">
          <div>弹出内容</div>
        </template>
        <button>点我</button>
      </k-popover>
    `
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(()=>{
      let event = new Event('mouseenter')
      vm.$el.dispatchEvent(event)
      vm.$nextTick(()=>{
        const { popoverContent } = vm.$refs.popoverTest2.$refs
        expect(popoverContent).to.exist
      })
      done()
    })
  })
})