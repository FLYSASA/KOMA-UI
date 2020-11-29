export default function validate (data, rules) {
  let errors = {}
  rules.forEach((rule) => {
    let value = data[rule.key]
    if(rule.required) {
      let error = validate.required(value)
      if(error){
        ensureObject(errors, rule.key)
        errors[rule.key].required = error;
        return;  // required优先级最高，没有继续验证的必要了，return 会退出这次的遍历，但不会退出整个循环, 会进入下个rule
      }
    }
    // let rules = [{ key:'email', required: true, pattern: 'email', maxLength: 3}]
    // 遍历 validatorsKeys, 并调用对应的函数
    let validatorsKeys = Object.keys(rule).filter(key => key!=='key' && key!=='required')
    validatorsKeys.forEach((k) => {
      if(validate[k]){
        // key is minLength | maxLength | hasNumber
        let error = validate[k](value, rule[k])
        if(error){
          // rule.key: email
          ensureObject(errors, rule.key)
          errors[rule.key][k] = error;
        }
      } else {
        throw `不存在的校验器: ${k}`
      }
    })
  })
  return errors;
}
validate.required = (value) => {
  if(!value && value !== 0){
    return '必填';  
  }
}
validate.pattern = (value, pattern) => {
  if(pattern === 'email') {
    pattern = /^.+@.+$/
  }
  if(!pattern.test(value)){
    return  '格式不正确'
  }
}
validate.minLength = (value, minLength) => {
  if(value.length < minLength) {
    return '太短'
  }
}
validate.maxLength = (value, maxLength) => {
  if(value.length > maxLength) {
    return '太长'
  }
}

function ensureObject (obj, key) {
  if(typeof obj[key] !== 'object'){
    obj[key] = {}
  }
}