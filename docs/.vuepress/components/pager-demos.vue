<template>
  <div class="wrapper cascader-demo">
    <demos-component
      name="基础用法"
      demokey="0"
      description="最简单的用法。"
      :codeStr="codeStr1">
      <template v-slot:code>
        <k-pager :total-page="20" :current-page.sync="currentPage"></k-pager>
      </template>
    </demos-component>
  </div>
</template>

<script>
import Pager from '../../../src/components/pager/pager';
import demosComponent from './demos-component.vue';

export default {
  name: 'KomaPagerDemo',
  components: {
    demosComponent,
    'k-pager': Pager,
  },
  props: {},
  data () {
    return {
      currentPage: 1,
      codeStr1: 
      `
        <k-pager :total-page="20" :current-page.sync="currentPage"></k-pager>

        data() {
          return  {
            currentPage: 1
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