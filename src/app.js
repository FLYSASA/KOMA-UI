import Vue from 'vue'
import plugin from './plugin'

import Button from './components/button/button'
import Icon from './components/icon'
import ButtonGroup from './components/button/button-group'
import Input from './components/input'
import Row from './components/grid/row'
import Col from './components/grid/col'
import Layout from './components/layout/layout'
import Header from './components/layout/header'
import Sider from './components/layout/sider'
import Content from './components/layout/content'
import Footer from './components/layout/footer'
import Toast from './components/toast'
import Filter from './components/filter'
import Tabs from './components/tabs/tabs.vue'
import TabsHead from './components/tabs/tabs-head.vue'
import TabsBody from './components/tabs/tabs-body.vue'
import TabsItem from './components/tabs/tabs-item.vue'
import TabsPane from './components/tabs/tabs-pane.vue'
import Popover from './components/popover.vue'
import Collapse from './components/collapse/collapse.vue'
import CollapseItem from './components/collapse/collapse-item.vue'
import Cascader from './components/cascader/cascader.vue'

Vue.component('g-button', Button)
Vue.component('k-icon', Icon)
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
Vue.component('k-tabs', Tabs)
Vue.component('k-tabs-head', TabsHead)
Vue.component('k-tabs-body', TabsBody)
Vue.component('k-tabs-item', TabsItem)
Vue.component('k-tabs-pane', TabsPane)
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