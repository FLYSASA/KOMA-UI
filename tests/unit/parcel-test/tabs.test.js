
const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head.vue'
import TabsBody from '../src/tabs-body.vue'
import TabsItem from '../src/tabs-item.vue'
import TabsPane from '../src/tabs-pane.vue'
Vue.component('k-tabs', Tabs)
Vue.component('k-tabs-head', TabsHead)
Vue.component('k-tabs-body', TabsBody)
Vue.component('k-tabs-item', TabsItem)
Vue.component('k-tabs-pane', TabsPane)

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
    <k-tabs selected="sport">
      <k-tabs-head>
        <k-tabs-item name="finance">财经</k-tabs-item>
        <k-tabs-item name="sport">体育</k-tabs-item>
        <k-tabs-item name="women">美女</k-tabs-item>
      </k-tabs-head>
      <k-tabs-body>
        <k-tabs-pane name="finance">财经相关资讯</k-tabs-pane>
        <k-tabs-pane name="sport">体育相关资讯</k-tabs-pane>
        <k-tabs-pane name="women">美女相关资讯</k-tabs-pane>
      </k-tabs-body>
    </k-tabs>
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