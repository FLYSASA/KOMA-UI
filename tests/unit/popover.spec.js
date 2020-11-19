import chai, { expect } from 'chai';
import Vue from 'vue';
import { mount } from '@vue/test-utils'
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
import Popover from '@/components/popover';

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.exist
  })
  it('可以设置 position', () => {
    const wrapper = mount(Popover, {
      slots: {
        default: {
          template: `<button>点我</button>`,
        },
        content: '<div>弹出内容</div>'
      },
      propsData: {
        position: 'bottom'
      }
    })
    const vm = wrapper.vm
    wrapper.find('button').trigger('click');
    vm.$nextTick().then(()=>{
      const classes = wrapper.find('.content-wrapper').classes()
      expect(classes).to.include('position-bottom')
    })
  })
  it('可以设置 trigger', () => {
    const wrapper = mount(Popover, {
      slots: {
        default: {
          template: `<button>点我</button>`,
        },
        content: '<div>弹出内容</div>'
      },
      propsData: {
        position: 'bottom',
        trigger: 'hover'
      }
    })
    const vm = wrapper.vm
    expect(wrapper.find('.content-wrapper').element).to.not.exist
    wrapper.find('.popover').trigger('mouseenter');
    vm.$nextTick().then(()=>{
      expect(wrapper.find('.content-wrapper').element).to.exist
    })
  })
})