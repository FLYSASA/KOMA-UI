import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import validate from '@/components/validate'

describe('validate', () => {
  it('存在.', () => {
    expect(validate).to.exist
  })

  it('required true报错', ()=>{
    let data = {
      email:''
    }
    let rules = [
      { key:'email', required: true}
    ]
    let errors = validate(data, rules)
    expect(errors.email.required).to.eq('必填')
  })

  it('required true通过', ()=>{
    let data = {
      email: 0
    }
    let rules = [
      { key:'email', required: true}
    ]
    let errors = validate(data, rules)
    expect(errors.email).to.not.exist
  })

  it('pattern 报错', ()=>{
    let data = {
      email: '@a.com'
    }
    let rules = [
      { key:'email', pattern: /^.+@.+$/, required: true}
    ]
    let errors = validate(data, rules)
    expect(errors.email.pattern).to.eq('格式不正确')
  })

  it('pattern 通过', ()=>{
    let data = {
      email: '1@a.com'
    }
    let rules = [
      { key:'email', pattern: /^.+@.+$/, required: true}
    ]
    let errors = validate(data, rules)
    expect(errors.email).to.not.exist
  })

  it('pattern email 报错', ()=>{
    let data = {
      email: '@a.com'
    }
    let rules = [
      { key:'email', pattern: 'email', required: true}
    ]
    let errors = validate(data, rules)
    expect(errors.email.pattern).to.eq('格式不正确')
  })

  it('pattern email 通过', ()=>{
    let data = {
      email: '1@a.com'
    }
    let rules = [
      { key:'email', pattern: 'email', required: true}
    ]
    let errors = validate(data, rules)
    expect(errors.email).to.not.exist
  })

  it('require & pattern', ()=>{
    let data = {
      email: ''
    }
    let rules = [
      { key:'email', pattern: 'email', required: true}
    ]
    let errors = validate(data, rules)
    console.log(errors)
    // errors = {email: {pattern: '格式不正确', required: '必填'}}
    expect(errors.email.required).to.exist
    expect(errors.email.pattern).to.not.exist
  })
})