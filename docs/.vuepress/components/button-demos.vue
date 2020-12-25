<template>
  <div class="wrapper">
    <demos-component
      :codeStr="content">
      <template v-slot:code>
        <g-button>默认按钮</g-button>
        <g-button icon="shezhi">图标按钮</g-button>
        <g-button :loading="true">加载中</g-button>
        <g-button disabled>禁用按钮</g-button>
      </template>
    </demos-component>
  </div>
</template>

<script>
import Button from '../../../src/components/button/button';
import KIcon from '../../../src/components/icon';
import demosComponent from './demos-component.vue';

export default {
  name: 'KomaButton',
  components: {
    demosComponent,
    'g-button': Button,
    KIcon
  },
  props: {},
  data () {
    return {
      content: 
      `
        <g-button>默认按钮</g-button>
        <g-button icon="shezhi">图标按钮</g-button>
        <g-button :loading="true">加载中</g-button>
        <g-button disabled>禁用按钮</g-button>
      `
    };
  },
  computed: {},
  created () {
    console.log(this.content)
  },
  methods: {}
}

</script>