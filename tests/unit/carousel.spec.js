import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Carousel from '@/components/carousel/carousel'
import CarouselItem from '@/components/carousel/carousel-item'
import Vue from 'vue';
chai.use(sinonChai)

describe('Carousel.vue', () => {
  it('存在.', () => {
    expect(Carousel).to.exist
  })

  it('接受 carousel-item, 默认展示第一个', (done)=>{
    Vue.component('GCarouselItem', CarouselItem)
    const wrapper = mount(Carousel, {
      propsData: {
        autoPlay: false
      },
      slots: {
        default: `
          <g-carousel-item name="1"><div class="box1">1</div></g-carousel-item>
          <g-carousel-item name="2"><div class="box2">2</div></g-carousel-item>
          <g-carousel-item name="3"><div class="box3">3</div></g-carousel-item>
        `
      }
    })
    setTimeout(()=>{
      expect(wrapper.find('.box1').exists()).to.be.true
      done()
    })
  })

  it('selected是几, 选中的就是几', (done)=>{
    Vue.component('GCarouselItem', CarouselItem)
    const wrapper = mount(Carousel, {
      propsData: {
        autoPlay: false,
        selected: '2'
      },
      slots: {
        default: `
          <g-carousel-item name="1"><div class="box1">1</div></g-carousel-item>
          <g-carousel-item name="2"><div class="box2">2</div></g-carousel-item>
          <g-carousel-item name="3"><div class="box3">3</div></g-carousel-item>
        `
      }
    })
    setTimeout(()=>{
      expect(wrapper.find('.box2').exists()).to.be.true
      done()
    })
  })

  it('点击第二个就展示第二个', (done)=>{
    Vue.component('GCarouselItem', CarouselItem)
    const wrapper = mount(Carousel, {
      propsData: {
        autoPlay: false,
        selected: '1'
      },
      slots: {
        default: `
          <g-carousel-item name="1"><div class="box1">1</div></g-carousel-item>
          <g-carousel-item name="2"><div class="box2">2</div></g-carousel-item>
          <g-carousel-item name="3"><div class="box3">3</div></g-carousel-item>
        `
      },
      listeners: {
        'update:selected': (x) => {
          expect(x).to.eq('2')
          done();
        }
      }
    })
    setTimeout(()=>{
      wrapper.find('[data-index="1"]').trigger('click')
    })
  })

  it('会自动播放', (done)=>{
    Vue.component('GCarouselItem', CarouselItem)
    const callback = sinon.fake()
    const wrapper = mount(Carousel, {
      propsData: {
        autoPlay: true,
        autoPlayDelay: 20,
        selected: '1'
      },
      slots: {
        default: `
          <g-carousel-item name="1"><div class="box1">1</div></g-carousel-item>
          <g-carousel-item name="2"><div class="box2">2</div></g-carousel-item>
          <g-carousel-item name="3"><div class="box3">3</div></g-carousel-item>
        `
      },
      listeners: {
        'update:selected': callback
      }
    })
    setTimeout(()=>{
      expect(callback).to.have.been.calledWith('2')
      done();
    }, 21)
  })
})