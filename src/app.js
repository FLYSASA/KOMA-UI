import Vue from 'vue'

import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'hi1'
  },
  created(){
    setTimeout(()=>{
      // 手动触发输入框的change事件
      const event = new Event('change');
      const inputElement = this.$el.querySelector('input')
      inputElement.dispatchEvent(event)
    }, 1000)
  },
  methods: {
    inputChange (e) {
      console.log(e)
    }
  }
})