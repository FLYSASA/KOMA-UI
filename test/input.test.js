const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/Input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.exist
  })
  // it('可以设置icon.', () => {
  //   const Constructor = Vue.extend(Input)
  //   const vm = new Constructor({
  //     propsData: {
  //       icon: 'settings'
  //     }
  //   }).$mount()
  //   const useElement = vm.$el.querySelector('use')
  //   expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
  //   vm.$destroy()
  // })
  
})