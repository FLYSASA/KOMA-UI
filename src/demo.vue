<template>
  <div id="app">
    <div>
      <g-nav :selected.sync="selected">
        <g-nav-item name="home">首页</g-nav-item>
        <g-sub-nav>
          <template #title>关于</template>
          <g-nav-item name="developer">开发团队</g-nav-item>
          <g-nav-item name="culture">企业文化</g-nav-item>
          <g-sub-nav>
            <template #title>联系方式</template>
            <g-nav-item name="wechat">微信</g-nav-item>
            <g-nav-item name="qq">qq</g-nav-item>
            <g-sub-nav name="mail">
              <template #title>手机</template>
              <g-nav-item name="wechat">移动</g-nav-item>
              <g-nav-item name="qq">电信</g-nav-item>
            </g-sub-nav>
          </g-sub-nav>
        </g-sub-nav>
        <g-nav-item name="news">资讯</g-nav-item>
      </g-nav>
    </div>
  </div>
</template>

<script>
import GNav from './components/nav/nav';
import GSubNav from './components/nav/subnav';
import GNavItem from './components/nav/nav-item';

export default {
  name: 'demo',
  components: {
    GNav,
    GSubNav,
    GNavItem
  },
  props: {},
  data () {
    return {
      selected: ['developer'],
    };
  },
  watch: {
    selected(val){
      console.log(val)
    }
  },
  computed: {},
  methods: {
  },
}

</script>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

</style>