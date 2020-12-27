<template>
  <div class="wrapper">
    <demos-component
      name="基础用法"
      demokey="0"
      :description="description1"
      :codeStr="codeStr1">
      <template v-slot:code>
        <k-button>默认按钮</k-button>
        <k-button icon="shezhi">图标按钮</k-button>
        <k-button :loading="true">加载中</k-button>
        <k-button disabled>禁用按钮</k-button>
      </template>
    </demos-component>

    <demos-component
      name="按钮组"
      demokey="1"
      :description="description2"
      :codeStr="codeStr2">
      <template v-slot:code>
        <k-button-group>
          <k-button icon="left">上一页</k-button>
          <k-button>更多</k-button>
          <k-button icon="right">下一页</k-button>
        </k-button-group>
      </template>
    </demos-component>
  </div>
</template>

<script>
import Button from '../../../src/components/button/button';
import ButtonGroup from '../../../src/components/button/button-group';
import KIcon from '../../../src/components/icon';
import demosComponent from './demos-component.vue';

export default {
  name: 'KomaButton',
  components: {
    demosComponent,
    KIcon,
    'k-button': Button,
    'k-button-group': ButtonGroup,
  },
  props: {},
  data () {
    return {
      codeStr1: 
      `
        <k-button>默认按钮</k-button>
        <k-button icon="shezhi">图标按钮</k-button>
        <k-button :loading="true">加载中</k-button>
        <k-button disabled>禁用按钮</k-button>
      `,
      description1: '基础的按钮用法。',
      codeStr2: `
        <k-button-group>
          <k-button icon="left">上一页</k-button>
          <k-button>更多</k-button>
          <k-button icon="right">下一页</k-button>
        </k-button-group>
      `,
      description2: '按钮组的基础用法。'
    };
  },
  computed: {},
  created () {
    console.log(this.content)
  },
  methods: {}
}

</script>