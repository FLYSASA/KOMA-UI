<template>
  <div class="wrapper">
    <demos-component
      name="基础用法"
      demokey="0"
      :description="description1"
      :codeStr="codeStr1">
      <template v-slot:code>
        <k-tabs :selected="selected">
          <k-tabs-head>
            <k-tabs-item name="1">tab1</k-tabs-item>
            <k-tabs-item name="2">tab2</k-tabs-item>
          </k-tabs-head>
          <k-tabs-body>
            <k-tabs-pane name="1">
              <div style="padding: 1em;">content1</div>
            </k-tabs-pane>
            <k-tabs-pane name="2">
              <div style="padding: 1em;">content2</div>
            </k-tabs-pane>
          </k-tabs-body>
        </k-tabs>
      </template>
    </demos-component>

    <demos-component
      name="禁用"
      demokey="1"
      :description="description2"
      :codeStr="codeStr2">
      <template v-slot:code>
        <k-tabs :selected="selected2">
          <k-tabs-head>
            <k-tabs-item name="1" disabled>tab1</k-tabs-item>
            <k-tabs-item name="2">tab2</k-tabs-item>
          </k-tabs-head>
          <k-tabs-body>
            <k-tabs-pane name="1">
              <div style="padding: 1em;">content1</div>
            </k-tabs-pane>
            <k-tabs-pane name="2">
              <div style="padding: 1em;">content2</div>
            </k-tabs-pane>
          </k-tabs-body>
        </k-tabs>
      </template>
    </demos-component>
  </div>
</template>

<script>
import Tabs from '../../../src/components/tabs/tabs';
import TabsHead from '../../../src/components/tabs/tabs-head';
import TabsItem from '../../../src/components/tabs/tabs-item';
import TabsBody from '../../../src/components/tabs/tabs-body';
import TabsPane from '../../../src/components/tabs/tabs-pane';
import demosComponent from './demos-component.vue';

export default {
  name: 'KomaButton',
  components: {
    demosComponent,
    'k-tabs': Tabs,
    'k-tabs-head': TabsHead,
    'k-tabs-item': TabsItem,
    'k-tabs-body': TabsBody,
    'k-tabs-pane': TabsPane,
  },
  props: {},
  data () {
    return {
      codeStr1: 
      `
        <k-tabs :selected="selected">
          <k-tabs-head>
            <k-tabs-item name="1">tab1</k-tabs-item>
            <k-tabs-item name="2">tab2</k-tabs-item>
          </k-tabs-head>
          <k-tabs-body>
            <k-tabs-pane name="1">
              <div style="padding: 1em;">content1</div>
            </k-tabs-pane>
            <k-tabs-pane name="2">
              <div style="padding: 1em;">content2</div>
            </k-tabs-pane>
          </k-tabs-body>
        </k-tabs>

        export default {
          data() {
            return {
              selected: '1'
            };
          }
        };
      `,
      codeStr2: 
      `
        <k-tabs :selected="selected2">
          <k-tabs-head>
            <k-tabs-item name="1" disabled>tab1</k-tabs-item>
            <k-tabs-item name="2">tab2</k-tabs-item>
          </k-tabs-head>
          <k-tabs-body>
            <k-tabs-pane name="1">
              <div style="padding: 1em;">content1</div>
            </k-tabs-pane>
            <k-tabs-pane name="2">
              <div style="padding: 1em;">content2</div>
            </k-tabs-pane>
          </k-tabs-body>
        </k-tabs>

        export default {
          data() {
            return {
              selected: '2'
            };
          }
        };
      `,
      description1: '基础的tabs用法。',
      description2: '可以通过设置disabled属性禁用某个tab选项卡。',
      selected: '2',
      selected2: '2'
    };
  },
}

</script>