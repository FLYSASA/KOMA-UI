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

import chai, {use} from 'chai';
const expect = chai.expect

try {
    // 单元测试
    {
        const Constructor = Vue.extend(Button)
        const button = new Constructor({
            propsData: {
                icon: 'shezhi'
            }
        })
        // 将button挂载至div上
        button.$mount('#test');
        let useElement = button.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')

        expect(href).to.equal('#i-shezhi')
    }

    {
        const Constructor = Vue.extend(Button)
        const button = new Constructor({
            propsData: {
                icon: 'shezhi',
                loading: true
            }
        })
        button.$mount()
        let useElement = button.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')

        expect(href).to.equal('#i-loading')
    }

    {
        const Constructor = Vue.extend(Button)
        const button = new Constructor({
            propsData: {
                icon: 'shezhi',
                loading: true
            }
        })
        button.$mount()
        let el = button.$el.querySelector('svg')
        let order = window.getComputedStyle(el)
        console.log(order)
    }
} catch (error) {
    window.errors  = [error]  //捕捉测试用例错误，并打印
} finally {
    window.errors && window.errors.forEach((error) => {
        console.log(error.message)
    })
}