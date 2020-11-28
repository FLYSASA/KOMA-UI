export default function validate (data, rules) {
  let errors = {}
  rules.forEach((rule) => {
    let value = data[rule.key]
    if(rule.required) {
      if(!value && value !== 0){
        errors[rule.key] = {required: '必填'}
        return;  // 会退出这次的遍历，但不会退出整个循环
      }
    }
    
    if(rule.pattern) {
      if(rule.pattern === 'email') {
        rule.pattern = /^.+@.+$/
      }
      if(!rule.pattern.test(value)){
        errors[rule.key] = {pattern: '格式不正确'}
      }
    }
  })
  return errors;
}