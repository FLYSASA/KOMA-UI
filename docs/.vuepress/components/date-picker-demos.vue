<template>
  <div class="wrapper cascader-demo">
    <demos-component
      name="基础用法"
      demokey="0"
      description="最简单的用法。"
      codedes="当然你也可以直接在输入框里输入想要的日期，来直接定位对应的日期。"
      :codeStr="codeStr1">
      <template v-slot:code>
        <k-date-picker v-model="date"></k-date-picker>
      </template>
    </demos-component>
  </div>
</template>

<script>
import DatePicker from '../../../src/components/date-picker/date-picker';
import demosComponent from './demos-component.vue';

export default {
  name: 'KomaDatePickerDemo',
  components: {
    demosComponent,
    'k-date-picker': DatePicker,
  },
  props: {},
  data () {
    return {
      date: new Date(),
      codeStr1: 
      `
        <k-date-picker v-model="date"></k-date-picker>

        data() {
          return {
            date: new Date()
          }
        }
      `,
    };
  },
  methods: {
  }
}

</script>

<style lang="less" scoped>
* {
    box-sizing: border-box;
  }
  .carousel-demo {
    .demo-content {
      width: 100%;
      height: 300px;
      background:#00abd5;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 24px;
    }
  }
</style>