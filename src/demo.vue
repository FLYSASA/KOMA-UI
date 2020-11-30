<template>
  <div id="app">
    <div>
      <div class="form-wrapper">
        <g-form class="form" :model="model" :rules="rules" ref="form">
          <h1>登录</h1>
          <g-form-item label="邮箱" prop="email">
            <g-input type="text" v-model="model.email"></g-input>
          </g-form-item>
          <g-form-item label="密码" prop="password">
            <g-input type="password" v-model="model.password"></g-input>
          </g-form-item>
          <div>
            <g-button class="ok" type="submit" @click="onSubmit">提交</g-button>
          </div>
        </g-form>
      </div>
    </div>
  </div>
</template>

<script>
import GButton from '@/components/button/button';
import GInput from '@/components/input';
import GForm from '@/components/form/form';
import GFormItem from '@/components/form/form-item';
import formMixin from '@/components/form/form-mixin';

export default {
  name: 'ButtonDemo',
  components: {
    GButton,
    GInput,
    GForm,
    GFormItem
  },
  mixins: [formMixin],
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
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    onSubmit () {
      this.$refs['form'].validate((valid)=>{
        if(valid){
          console.log(valid)
        }
      })
    }
  },
}

</script>
<style lang="less">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .form-wrapper{
    padding: 20px;
  }

</style>