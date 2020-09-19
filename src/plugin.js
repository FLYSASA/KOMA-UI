import Toast from './toast'

let currentToast;
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, toastOptions){
      if(currentToast){
        currentToast.close()
      }
      currentToast = createToast({
        Vue,
        message,
        propsData: toastOptions, 
        onClose: ()=>{
          currentToast = null
        } 
      })
    }
  }
}

// helper.js
function createToast({Vue, message, propsData, onClose}) {
  const Constructor = Vue.extend(Toast)
  const toast = new Constructor({
    propsData
  })
  toast.$slots.default = message;
  toast.$mount()
  toast.$on('close', onClose)
  document.body.appendChild(toast.$el)
  return toast;
}