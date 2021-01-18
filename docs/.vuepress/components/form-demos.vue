<template>
  <div class="wrapper cascader-demo">
    <demos-component
      name="基础用法"
      demokey="0"
      description="传入规则对表单进行提交验证。"
      :codeStr="codeStr1">
      <template v-slot:code>
        <div class="form-wrapper">
          <k-form class="form" :model="model" :rules="rules" ref="form" autocomplete="off">
            <h1>登录</h1>
            <k-form-item label="邮箱" prop="email">
              <k-input type="text" v-model="model.email"></k-input>
            </k-form-item>
            <k-form-item label="密码" prop="password">
              <k-input type="password" v-model="model.password"></k-input>
            </k-form-item>
            <div class="submit">
              <k-button type="submit" @click="onSubmit">提交</k-button>
            </div>
          </k-form>
        </div>
      </template>
    </demos-component>
  </div>
</template>

<script>
import Button from '../../../src/components/button/button';
import Input from '../../../src/components/input';
import Form from '../../../src/components/form/form';
import FormItem from '../../../src/components/form/form-item';
import demosComponent from './demos-component.vue';

export default {
  name: 'KomaDatePickerDemo',
  components: {
    demosComponent,
    'k-button': Button,
    'k-input': Input,
    'k-form': Form,
    'k-form-item': FormItem,
  },
  props: {},
  data () {
    return {
      model: {
        email: '',
        password: ''
      },
      rules: [
        { key: 'email', pattern: 'email', required: true},
        { key: 'password', minLength: 6, required: true}
      ],
      codeStr1: 
      `
        <div class="form-wrapper">
          <k-form class="form" :model="model" :rules="rules" ref="form">
            <h1>登录</h1>
            <k-form-item label="邮箱" prop="email">
              <k-input type="text" v-model="model.email"></k-input>
            </k-form-item>
            <k-form-item label="密码" prop="password">
              <k-input type="password" v-model="model.password"></k-input>
            </k-form-item>
            <div class="submit">
              <k-button type="submit" @click="onSubmit">提交</k-button>
            </div>
          </k-form>
        </div>

        data() {
          return {
            model: {
              email: '',
              password: ''
            },
            rules: [
              { key: 'email', pattern: 'email', required: true},
              { key: 'password', minLength: 6, required: true}
            ],
          }
        },
        methods: {
          onSubmit () {
            this.$refs['form'].validate((valid, error)=>{
              if(valid){
                console.log(valid, error)
              }
            })
          }
        }
        <style lang="less" scoped>
          .form-wrapper{
            padding: 20px;
            width: 50%;
            height: 300px;
            border: 1px solid #eee;
            border-radius: 4px;
            ::after {
              clear: both;
              content:'';
              display: block;
            }
            .submit {
              float: right;
            }
          }
        </style>
      `,
    };
  },
  methods: {
    onSubmit () {
      this.$refs['form'].validate((valid, error)=>{
        if(valid){
          console.log(valid, error)
        }
      })
    }
  }
}

</script>

<style lang="less" scoped>
* {
    box-sizing: border-box;
  }
  .form-wrapper{
    padding: 20px;
    width: 50%;
    height: 300px;
    border: 1px solid #eee;
    border-radius: 4px;
    ::after {
      clear: both;
      content:'';
      display: block;
    }
    .submit {
      float: right;
    }
  }
</style>