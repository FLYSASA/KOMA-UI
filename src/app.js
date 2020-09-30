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
import Toast from './toast'
import Filter from './filter'
import Tabs from './tabs.vue'
import TabsHead from './tabs-head.vue'
import TabsBody from './tabs-body.vue'
import TabsItem from './tabs-item.vue'
import TabsPane from './tabs-pane.vue'
import Popover from './popover.vue'

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
Vue.component('g-filter', Filter)
Vue.component('g-toast', Toast)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)

Vue.use(plugin);

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'hi1',
    selectedTab: 'women'
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
    yyy(val){
      console.log(val)
    },
    inputChange (e) {
      // console.log(e)
    },
    showToast1(){
      this.showToast('top')
    },
    showToast2(){
      this.showToast('middle')
    },
    showToast3(){
      this.showToast('bottom')
    },
    showToast(position){
      this.$toast('知道了', {
        autoClose: 3000,
        position: position,
        closeButton: {
          text: '测试', 
          callback(){console.log('喜喜')}
        },
        enableHtml: false
      })
    }
  }
})