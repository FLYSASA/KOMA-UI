
const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head.vue'
import TabsBody from '../src/tabs-body.vue'
import TabsItem from '../src/tabs-item.vue'
import TabsPane from '../src/tabs-pane.vue'
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {
  it('存在.', () => {
    expect(TabsItem).to.exist
  })
  it('接受 name 属性', ()=>{
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'women'
      }
    }).$mount()
    expect(vm.$el.getAttribute('data-name')).to.eq('women')
  })
  it('接受 disabled 属性', ()=>{
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'xx',
        disabled: true
      }
    }).$mount()
    expect(vm.$el.classList.contains('disabled')).to.be.true

    const callback = sinon.fake();
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
  })

})