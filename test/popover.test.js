const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.exist
  })
  it('可以设置position', (done) => {
    Vue.component('g-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-popover position="bottom" ref="popoverTest">
        <template #content">
          <div>弹出内容</div>
        </template>
        <button>点我</button>
      </g-popover>
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
    // expect(useElements.length).to.equal(1)
    // expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
    // vm.$destroy()
  })
})