
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

describe('Tabs', () => {
  it('存在.', () => {
    expect(Tabs).to.exist
  })
  it('接受 selected 属性', (done)=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <g-tabs selected="sport">
      <g-tabs-head>
        <g-tabs-item name="finance">财经</g-tabs-item>
        <g-tabs-item name="sport">体育</g-tabs-item>
        <g-tabs-item name="women">美女</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="finance">财经相关资讯</g-tabs-pane>
        <g-tabs-pane name="sport">体育相关资讯</g-tabs-pane>
        <g-tabs-pane name="women">美女相关资讯</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
    `
    let vm = new Vue({
      el: div
    })

    // 这里mounted是异步的，所以直接打印tabs-item是没有active属性的
    // console.log('vm.$el.outerHTML: ', vm.$el.outerHTML);
    vm.$nextTick(()=>{
      // console.log('vm.$el.outerHTML: ', vm.$el.outerHTML);
      let activeEl = vm.$el.querySelector(`.tabs-item[data-name="sport"]`)
      expect(activeEl.classList.contains('active')).to.be.true
      done();
    })
  })

  it('接受 direction 属性', ()=>{
    
  })
})