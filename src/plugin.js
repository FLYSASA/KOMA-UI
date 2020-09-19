import Toast from './toast'

let currentToast;
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, toastOptions){
      if(currentToast){
        currentToast.close()
      }
      currentToast = createToast({propsData: toastOptions, message, Vue})
    }
  }
}

// helper.js
function createToast({propsData, message, Vue}) {
  const Constructor = Vue.extend(Toast)
  const toast = new Constructor({
    propsData
  })
  toast.$slots.default = message;
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast;
}