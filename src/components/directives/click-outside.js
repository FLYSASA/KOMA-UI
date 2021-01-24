// 这样做的目的是只用一个监听器
let onClickDocument = (e)=>{
  let { target } = e
  callbacks.forEach(i=>{
    if(target === i.el || i.el.contains(target)) {
      return;
    } else {
      i.callback();
    }
  })
}
document.addEventListener('click', onClickDocument)
let callbacks = []

export default {
  bind: function(el, binding){
    callbacks.push({el, callback: binding.value})
  }
}

let removeListener = ()=>{
  document.removeEventListener('click', onClickDocument)
}

// 支持移除监听
export { removeListener };

