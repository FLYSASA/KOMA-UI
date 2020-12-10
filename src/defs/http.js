function core(method, url, options) {
  let xhr = new XMLHttpRequest()
  xhr.open(method, url)
  xhr.onload = () => {
    options.success && options.success(xhr.response)
  }
  xhr.onerror = ()=>{
    options.fail && options.fail(xhr)
  }
  xhr.send(options.formData)
}

// 将http抽离为一个对象，方便对内部的改写，
// 如果直接导出一个函数，是无法直接改写函数的, 不方便进行测试用例
export default {
  get () {},
  post (url, options) {
    return core('post', url, options)
  },
  put () {},
  delete () {},
  patch () {},
}