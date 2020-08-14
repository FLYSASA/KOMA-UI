import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
    el: '#app',
    data: {
        loading1: true,
        loading2: true
    }
})

import chai, { use } from 'chai';
const expect = chai.expect

// 单元测试
// icon测试
{
    const Constructor = Vue.extend(Button)
    const gbutton = new Constructor({
        propsData: {
            icon: 'shezhi'
        }
    })
    // 将button挂载至div上
    gbutton.$mount('#test');
    let useElement = gbutton.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')

    expect(href).to.equal('#i-shezhi')
    gbutton.$el.remove()
    gbutton.$destroy()
}
// loading测试
{
    const Constructor = Vue.extend(Button)
    const gbutton = new Constructor({
        propsData: {
            icon: 'shezhi',
            loading: true
        }
    })
    gbutton.$mount()
    let useElement = gbutton.$el.querySelector('use')
    let href= useElement.getAttribute('xlink:href')

    expect(href).to.equal('#i-loading')
    gbutton.$el.remove()
    gbutton.$destroy()
}
// icon order测试
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const gbutton = new Constructor({
        propsData: {
            icon: 'shezhi',
            loading: true
        }
    })
    gbutton.$mount(div)
    let el = gbutton.$el.querySelector('svg')
    let {order} = window.getComputedStyle(el)
    
    expect(order).to.equal('1')
    gbutton.$el.remove()
    gbutton.$destroy()
}

// icon position测试
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const gbutton = new Constructor({
        propsData: {
            icon: 'shezhi',
            iconPosition: 'right',
            loading: true
        }
    })
    gbutton.$mount(div)
    let el = gbutton.$el.querySelector('svg')
    let {order} = window.getComputedStyle(el)
    
    expect(order).to.equal('2')
    gbutton.$el.remove()
    gbutton.$destroy()
}

// 测试点击事件，点击事件不需要渲染在页面上
{
    const Constructor = Vue.extend(Button)
    const gbutton = new Constructor({
        propsData: {
            icon: 'shezhi',
            iconPosition: 'right',
        }
    })
    gbutton.$mount()
    // 监听click事件
    gbutton.$on('click', function(){
        console.log(1)
    })
    let button  = gbutton.$el
    button.click()
    
    gbutton.$el.remove()
    gbutton.$destroy()
}