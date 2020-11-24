import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {shallowMount, mount} from '@vue/test-utils';
import Nav from '@/components/nav/nav';
import NavItem from '@/components/nav/nav-item';
import SubNav from '@/components/nav/subnav';
import Vue from 'vue';
chai.use(sinonChai)

describe('Nav.vue', () => {
  it('存在.', () => {
    expect(Nav).to.exist
  })
  it('支持 selected 属性', (done)=>{
    Vue.component('GNavItem', NavItem)
    Vue.component('GSubNav', SubNav)
    const wrapper = mount(Nav, {
      propsData: {
        selected: 'home'
      },
      slots: {
        default: `
          <g-nav-item name="home">首页
          </g-nav-item>
          <g-sub-nav name="about">
            <template #title>关于</template>
            <g-nav-item name="developer">开发团队</g-nav-item>
            <g-nav-item name="culture">企业文化</g-nav-item>
          </g-sub-nav>
          <g-nav-item name="news">资讯</g-nav-item>
        `
      }
    })
    setTimeout(()=>{
      expect(wrapper.find('[data-name="home"].active').exists()).to.be.true;
      done()
    })
  })

  it('会触发 update:selected 事件', (done)=>{
    Vue.component('GNavItem', NavItem)
    Vue.component('GSubNav', SubNav)
    const callback = sinon.fake();
    const wrapper = mount(Nav, {
      propsData: {
        selected: 'home'
      },
      slots: {
        default: `
          <g-nav-item name="home">首页
          </g-nav-item>
          <g-sub-nav name="about">
            <template #title>关于</template>
            <g-nav-item name="developer">开发团队</g-nav-item>
            <g-nav-item name="culture">企业文化</g-nav-item>
          </g-sub-nav>
          <g-nav-item name="news">资讯</g-nav-item>
        `
      },
      listeners: {
        'update:selected': callback
      }
    })
    setTimeout(()=>{
      wrapper.find('[data-name="developer"]').trigger('click')
      expect(callback).to.have.been.calledWith('developer')
      done();
    })
  })

})