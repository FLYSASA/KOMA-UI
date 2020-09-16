import Toast from './toast'
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message){
      const Constructor = Vue.extend(Toast)
      const toast = new Constructor({
        propsData: {}
      })
      toast.$slots.default = message;
      toast.$mount()
      document.body.appendChild(toast.$el)

    }
  }
}