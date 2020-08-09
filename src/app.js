import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)

new Vue({
    el: '#app',
})