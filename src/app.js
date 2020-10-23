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
import Collapse from './collapse.vue'
import CollapseItem from './collapse-item.vue'
import Cascader from './cascader.vue'

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
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)
Vue.component('g-cascader', Cascader)

Vue.use(plugin);

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'hi1',
    selectedTab: 'women',
    selectedCollapse: ['1'],
    cascaderDatas: [
      {
        name: '浙江',
        key: 'zhejiang',
        children: [
          {
            name: '杭州',
            key: 'hangzhou',
            children: [
              {
                name: '上城区',
                key: 'shangchengqu',
              },
              {
                name: '下城区',
                key: 'xiaChengqu',
              }
            ]
          },
          {
            name: '嘉兴',
            key: 'jiaxing',
          },
          {
            name: '湖州',
            key: 'huzhou',
          }
        ]
      },
      {
        name: '福建',
        key: 'fujian',
        children: [
          {
            name: '福州',
            key: 'fuzhou',
            children: [
              {
                name: '鼓楼',
                key: 'gulou',
              },
              {
                name: '台江',
                key: 'taijiang',
              }
            ]
          },
          {
            name: '莆田',
            key: 'putian',
          }
        ]
      }
    ]
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
    yyy(){
      console.log('yyy')
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