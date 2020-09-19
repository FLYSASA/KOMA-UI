import Vue from 'vue'
import plugin from './plugin'

import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './Toast'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-toast', Toast)

Vue.use(plugin);

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'hi1'
  },
  created(){
    // setTimeout(()=>{
    //   // 手动触发输入框的change事件
    //   const event = new Event('change');
    //   const inputElement = this.$el.querySelector('input')
    //   inputElement.dispatchEvent(event)
    // }, 1000)
  },
  methods: {
    inputChange (e) {
      // console.log(e)
    },
    showToast(){
      this.$toast('知道了', {
        autoClose: false,
        position: 'middle',
        closeButton: {
          text: '测试', 
          callback(){console.log('喜喜')}
        },
        enableHtml: false
      })
    }
  }
})