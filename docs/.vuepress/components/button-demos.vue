<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="shezhi">图标按钮</g-button>
    <g-button :loading="true">加载中</g-button>
    <g-button disabled>禁用按钮</g-button>

    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import Button from '../../../src/button';
export default {
  name: '',
  components: {
    'g-button': Button
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
  created () {},
  methods: {}
}

</script>