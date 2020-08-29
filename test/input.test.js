const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.exist
  })
  it('可以接收 value', () => {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
      propsData: {
        value: 'test'
      }
    }).$mount()
    const inputElement = vm.$el.querySelector('input')
    expect(inputElement.value).to.equal('test')
    vm.$destroy()
  })
  it('可以接收 disabled', () => {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()
    const inputElement = vm.$el.querySelector('input')
    expect(inputElement.disabled).to.equal(true)
    vm.$destroy()
  })
  it('可以接收 readonly', () => {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
      propsData: {
        readonly: true
      }
    }).$mount()
    const inputElement = vm.$el.querySelector('input')
    expect(inputElement.readOnly).to.equal(true)
    vm.$destroy()
  })
  it('可以接收 error', () => {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
      propsData: {
        error: '报错了'
      }
    }).$mount()
    const inputElement = vm.$el.querySelector('use')
    expect(inputElement.getAttribute('xlink:href')).to.equal('#i-error')
    const errorMessage = vm.$el.querySelector('.errorMessage')
    expect(errorMessage.innerText).to.equal('报错了')
    vm.$destroy()
  })
  
})