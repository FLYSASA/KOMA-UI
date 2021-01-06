<template>
  <div class="wrapper collapse-demo">
    <demos-component
      name="基础用法"
      demokey="0"
      description="selected接受一个数组，可以定义初始化要展开的项。"
      :codeStr="codeStr1">
      <template v-slot:code>
        <k-collapse :selected.sync="selected">
          <k-collapse-item title="标题1" name="1">
            <div class="demo-content">当你足够好时，周围的一切都会自然地变得更好。</div></k-collapse-item>
          <k-collapse-item title="标题2" name="2">
            <div class="demo-content">你目前所做的可能暂时看不到结果，但不要灰心或焦虑，你没有成长，而是在扎根。</div></k-collapse-item>
          </k-collapse-item>
          <k-collapse-item title="标题3" name="3">
            <div class="demo-content">成功需要成本，时间也是成本，珍惜时间就是节省成本。</div></k-collapse-item>
          </k-collapse-item>
        </k-collapse>
      </template>
    </demos-component>
    <demos-component
      name="手风琴效果"
      demokey="1"
      description="single 传 true，开启手风琴效果。"
      :codeStr="codeStr2">
      <template v-slot:code>
        <k-collapse :selected.sync="selected2" single>
          <k-collapse-item title="标题1" name="1">
            <div class="demo-content">当你足够好时，周围的一切都会自然地变得更好。</div></k-collapse-item>
          <k-collapse-item title="标题2" name="2">
            <div class="demo-content">你目前所做的可能暂时看不到结果，但不要灰心或焦虑，你没有成长，而是在扎根。</div></k-collapse-item>
          </k-collapse-item>
          <k-collapse-item title="标题3" name="3">
            <div class="demo-content">成功需要成本，时间也是成本，珍惜时间就是节省成本。</div></k-collapse-item>
          </k-collapse-item>
        </k-collapse>
      </template>
    </demos-component>
  </div>
</template>

<script>
import Button from '../../../src/components/button/button';
import Icon from '../../../src/components/icon';
import Collapse from '../../../src/components/collapse/collapse';
import CollapseItem from '../../../src/components/collapse/collapse-item';
import demosComponent from './demos-component.vue';

export default {
  name: 'KomaCollapseDemo',
  components: {
    demosComponent,
    'k-button': Button,
    'k-icon': Icon,
    'k-collapse': Collapse,
    'k-collapse-item': CollapseItem,
  },
  props: {},
  data () {
    return {
      codeStr1: 
      `
        <k-collapse :selected.sync="selected">
          <k-collapse-item title="标题1" name="1">
            <div class="demo-content">当你足够好时，周围的一切都会自然地变得更好。</div></k-collapse-item>
          <k-collapse-item title="标题2" name="2">
            <div class="demo-content">你目前所做的可能暂时看不到结果，但不要灰心或焦虑，你没有成长，而是在扎根。</div></k-collapse-item>
          </k-collapse-item>
          <k-collapse-item title="标题3" name="3">
            <div class="demo-content">成功需要成本，时间也是成本，珍惜时间就是节省成本。</div></k-collapse-item>
          </k-collapse-item>
        </k-collapse>
        
        data() {
          return {
            selected: ['2']
          }
        }

        <style>
          .demo-content {
            padding: 15px 8px;
          }
        </style>
      `,
      codeStr2: 
      `
        <k-collapse :selected.sync="selected2" single>
          <k-collapse-item title="标题1" name="1">
            <div class="demo-content">当你足够好时，周围的一切都会自然地变得更好。</div></k-collapse-item>
          <k-collapse-item title="标题2" name="2">
            <div class="demo-content">你目前所做的可能暂时看不到结果，但不要灰心或焦虑，你没有成长，而是在扎根。</div></k-collapse-item>
          </k-collapse-item>
          <k-collapse-item title="标题3" name="3">
            <div class="demo-content">成功需要成本，时间也是成本，珍惜时间就是节省成本。</div></k-collapse-item>
          </k-collapse-item>
        </k-collapse>
      `,
      selected: ['2'],
      selected2: [],
    };
  },
  mounted() {
  },
  methods: {
  }
}

</script>

<style lang="less" scoped>
* {
    box-sizing: border-box;
  }
  .collapse-demo {
    .demo-content {
      padding: 15px 8px;
    }
  }
</style>