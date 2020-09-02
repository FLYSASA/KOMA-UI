const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.exist
  })

  describe('props', () => {
    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(() => {
      vm.$destroy()
    })
    it('可以接收 value', () => {
      vm = new Constructor({
        propsData: {
          value: 'test'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('test')
    })
    it('可以接收 disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })
    it('可以接收 readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })
    it('可以接收 error', () => {
      vm = new Constructor({
        propsData: {
          error: '你错了'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
      const errorMessage = vm.$el.querySelector('.errorMessage')
      expect(errorMessage.innerText).to.equal('你错了')
    })
  })

  describe('事件', ()=>{
    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(() => {
      vm.$destroy()
    })
    it('支持 change/input/blur/focus 事件', ()=>{
      ['change', 'input', 'blur', 'focus'].forEach((eventName) => {
        vm = new Constructor({}).$mount()
        const callback = sinon.fake();
        vm.$on(eventName, callback);
        // 触发对应的事件
        const event = new Event(eventName);
        // 给触发的事件传值
        Object.defineProperty(event, 'target', {
          value: {value: 'hi'},
          enumerable: true
        })
        const inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith('hi')
      })
    })
  })

})