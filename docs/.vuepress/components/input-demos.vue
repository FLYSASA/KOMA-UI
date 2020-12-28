<template>
  <div class="wrapper">
    <demos-component
      name="基础用法"
      demokey="0"
      :description="description1"
      :codeStr="codeStr1">
      <template v-slot:code>
        <div class="demo-wrapper">
          <k-input  placeholder="请输入"></k-input>
          <k-input value="文本"></k-input>
          <k-input value="文本" readonly></k-input>
          <k-input value="文本" disabled></k-input>
        </div>
      </template>
    </demos-component>

    <demos-component
      name="双向绑定"
      demokey="1"
      :description="description2"
      :codeStr="codeStr2">
      <template v-slot:code>
        <div>
          <k-input v-model="value"></k-input>
          <span>value: {{ value }}</span>
        </div>
      </template>
    </demos-component>

    <demos-component
      name="错误状态"
      demokey="2"
      :description="description3"
      :codeStr="codeStr3">
      <template v-slot:code>
        <div>
          <k-input v-model="value2" error="请输入数字"></k-input>
        </div>
      </template>
    </demos-component>
  </div>
</template>

<script>
import Input from '../../../src/components/input';
import KIcon from '../../../src/components/icon';
import demosComponent from './demos-component.vue';

export default {
  name: 'KomaButton',
  components: {
    demosComponent,
    KIcon,
    'k-input': Input,
  },
  props: {},
  data () {
    return {
      codeStr1: 
      `
        <k-input placeholder="请输入"></k-input>
        <k-input value="文本"></k-input>
        <k-input value="文本" readonly></k-input>
        <k-input value="文本" disabled></k-input>
      `,
      description1: '基础的Input框用法。',
      codeStr2: `
        <k-input v-model="value"></k-input>
        <span>value: {{ value }}</span>
      `,
      description2: '支持使用v-model双向绑定。',
      codeStr2: `
        <k-input v-model="value"></k-input>
        <span>value: {{ value }}</span>
      `,
      description3: '通过传入error字段，来展示错误信息。',
      codeStr3: `
        <k-input v-model="value2" error="请输入数字"></k-input>
      `,
      value: 'koma',
      value2: 'koma',
    };
  }
}

</script>

<style lang="less" scoped>
.demo-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .k-input-wrapper {
    width: 24%;
  }
}
</style>