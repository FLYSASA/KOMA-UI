<template>
  <div class="wrapper">
    <demos-component
      name="基础用法"
      demokey="0"
      :description="description1"
      :codeStr="codeStr1">
      <template v-slot:code>
        <div class="icon-wrapper">
          <k-icon name="up"></k-icon>
          <k-icon name="double-right"></k-icon>
          <k-button icon="download">下载</k-button>
        </div>
      </template>
    </demos-component>

    <section>
      <h2>图标合集</h2>
      <ul class="icon-wrapper1">
        <li class="single">
          <k-icon name="up"></k-icon>
          <span>up</span>
        </li>
        <li class="single">
          <k-icon name="down"></k-icon>
          <span>down</span>
        </li>
        <li class="single">
          <k-icon name="left"></k-icon>
          <span>left</span>
        </li>
        <li class="single">
          <k-icon name="right"></k-icon>
          <span>right</span>
        </li>
        <li class="single">
          <k-icon name="delete"></k-icon>
          <span>delete</span>
        </li>
        <li class="single">
          <k-icon name="double-left"></k-icon>
          <span>double-left</span>
        </li>
        <li class="single">
          <k-icon name="double-right"></k-icon>
          <span>double-right</span>
        </li>
        <li class="single">
          <k-icon name="download"></k-icon>
          <span>download</span>
        </li>
        <li class="single">
          <k-icon name="descending"></k-icon>
          <span>descending</span>
        </li>
        <li class="single">
          <k-icon name="ascending"></k-icon>
          <span>ascending</span>
        </li>
        <li class="single">
          <k-icon name="more"></k-icon>
          <span>more</span>
        </li>
        <li class="single">
          <k-icon name="info"></k-icon>
          <span>info</span>
        </li>
        <li class="single">
          <k-icon name="error"></k-icon>
          <span>error</span>
        </li>
        <li class="single">
          <k-icon name="loading"></k-icon>
          <span>loading</span>
        </li>
        <li class="single">
          <k-icon name="good"></k-icon>
          <span>good</span>
        </li>
        <li class="single">
          <k-icon name="shezhi"></k-icon>
          <span>shezhi</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import KIcon from '../../../src/components/icon';
import Button from '../../../src/components/button/button';
import demosComponent from './demos-component.vue';

export default {
  name: 'KomaButton',
  components: {
    demosComponent,
    KIcon,
    'k-button': Button,
  },
  props: {},
  data () {
    return {
      codeStr1: 
      `
        <k-icon name="up"></k-icon>
        <k-icon name="double-right"></k-icon>
        <k-button icon="download">下载</k-button>
      `,
      description1: '基础的icon用法。',
    };
  },
  computed: {},
  created () {
    console.log(this.content)
  },
  methods: {}
}

</script>

<style lang="less" scoped>
ul,li {
  padding: 0;
  margin: 0;
}
.icon-wrapper {
  display: flex;
  align-items: center;
  .k-icon {
    width: 2em;
    height: 2em;
    fill: #606266;
  }
}
.icon-wrapper1 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  .single {
    width: 16%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #eee;
    margin: -1px 0 0 -1px;
    flex-direction: column;
    color: #aeb4bd;
    span {
      font-size: 14px;
      margin-top: 6px;
    }
  }
  /deep/ .k-icon {
    width: 2em;
    height: 2em;
    fill: #5f6166;
  }
}
</style>