<template>
  <div id="app">
    <div>
      <g-nav :selected.sync="selected">
        <g-nav-item name="home">首页</g-nav-item>
        <g-nav-item name="about">关于</g-nav-item>
        <g-nav-item name="news">资讯</g-nav-item>
      </g-nav>
    </div>
  </div>
</template>

<script>
import GNav from './components/nav/nav';
import GNavItem from './components/nav/nav-item';

export default {
  name: 'demo',
  components: {
    GNav,
    GNavItem
  },
  props: {},
  data () {
    return {
      selected: ['home'],
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