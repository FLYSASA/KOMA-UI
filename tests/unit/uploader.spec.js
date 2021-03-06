import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Uploader from '@/components/uploader/uploader'
import http from '@/components/defs/http'
chai.use(sinonChai)

describe('Uploader.vue', () => {
  it('存在.', () => {
    expect(Uploader).to.exist
  })
  it('可以上传一个文件', (done)=>{
    // 模拟一个post请求
    // http.post = (url, options) => {
    //   setTimeout(()=>{
    //     options.success('{"id": "123"}')
    //   }, 1000)
    // }
    // 改为 sinon 模拟 http的post方法
    let stub = sinon.stub(http, 'post').callsFake((url, options)=>{
      setTimeout(()=>{
        options.success('{"id": "123"}')
      }, 1000)
    })
    const wrapper = mount(Uploader, {
      propsData: {
        name: 'file',
        action: '/upload',
        method: 'post',
        parseResponse: (response)=> {
          let res = JSON.parse(response)
          return `/preview/${res.id}`
        },
        fileList: []
      },
      slots: {
        default: `<button id="trigger">点我</button>`
      },
      // 模拟 async 更新
      listeners: {
        'update:fileList': (fileList)=>{
          wrapper.setProps({fileList})
        },
        'uploaded': ()=>{
          setTimeout(()=>{
            expect(wrapper.find('.file-name').classes()).contain('success')
            expect(wrapper.find('img').attributes('src')).to.eq('/preview/123')
            // 将http.post方法重置成默认的，以免影响下个测试用例
            stub.restore()
            done()
          })
        }
      }
    })
    
    wrapper.find('#trigger').trigger('click')
    
    let inputWrapper = wrapper.find('input[type="file"]')
    let input = inputWrapper.element
    let file1 = new File(['xxx'], 'xxx.png', { type: 'image/png'})
    // input的files是个文件对象数组，不能直接赋值，所以这里引入DataTransfer
    const data = new DataTransfer()
    data.items.add(file1)
    input.files = data.files
    // 改了files的值，不知道为啥没有触发change事件，这里手动再触发一下
    const changeEvent = new Event('change');
    input.dispatchEvent(changeEvent);
    setTimeout(()=>{
      let use = wrapper.find('use').element
      expect(use.getAttribute('xlink:href')).to.eq('#i-loading')
    })
  })
})