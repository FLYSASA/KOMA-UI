<template>
  <div class="wrapper cascader-demo">
    <demos-component
      name="基础用法"
      demokey="0"
      description="最简单的用法。"
      :codeStr="codeStr1">
      <template v-slot:code>
        <k-nav :selected.sync="selected">
          <k-nav-item name="home">首页
          </k-nav-item>
          <k-sub-nav name="about">
            <template #title>关于</template>
            <k-nav-item name="developer">开发团队</k-nav-item>
            <k-nav-item name="culture">企业文化</k-nav-item>
            <k-sub-nav name="contact">
              <template #title>联系方式</template>
              <k-nav-item name="wechat">微信</k-nav-item>
              <k-nav-item name="qq">qq</k-nav-item>
              <k-sub-nav name="mobile">
                <template #title>手机</template>
                <k-nav-item name="cm">移动</k-nav-item>
                <k-nav-item name="cn">电信</k-nav-item>
              </k-sub-nav>
            </k-sub-nav>
          </k-sub-nav>
          <k-nav-item name="news">资讯</k-nav-item>
        </k-nav>
      </template>
    </demos-component>

    <demos-component
      name="侧栏"
      demokey="1"
      description="垂直菜单。"
      :codeStr="codeStr1">
      <template v-slot:code>
        <k-nav :selected.sync="selected2" vertical style="width:200px;">
          <k-nav-item name="home">首页
          </k-nav-item>
          <k-sub-nav name="about">
            <template #title>关于</template>
            <k-nav-item name="developer">开发团队</k-nav-item>
            <k-nav-item name="culture">企业文化</k-nav-item>
            <k-sub-nav name="contact">
              <template #title>联系方式</template>
              <k-nav-item name="wechat">微信</k-nav-item>
              <k-nav-item name="qq">qq</k-nav-item>
              <k-sub-nav name="mobile">
                <template #title>手机</template>
                <k-nav-item name="cm">移动</k-nav-item>
                <k-nav-item name="cn">电信</k-nav-item>
              </k-sub-nav>
            </k-sub-nav>
          </k-sub-nav>
          <k-nav-item name="news">资讯</k-nav-item>
        </k-nav>
      </template>
    </demos-component>
  </div>
</template>

<script>
import Nav from '../../../src/components/nav/nav';
import SubNav from '../../../src/components/nav/subnav';
import NavItem from '../../../src/components/nav/nav-item';
import demosComponent from './demos-component.vue';

export default {
  name: 'KomaPagerDemo',
  components: {
    demosComponent,
    'k-nav': Nav,
    'k-sub-nav': SubNav,
    'k-nav-item': NavItem,
  },
  props: {},
  data () {
    return {
      selected: 'home',
      selected2: '',
      codeStr1: 
      `
        <k-nav :selected.sync="selected">
          <k-nav-item name="home">首页
          </k-nav-item>
          <k-sub-nav name="about">
            <template #title>关于</template>
            <k-nav-item name="developer">开发团队</k-nav-item>
            <k-nav-item name="culture">企业文化</k-nav-item>
            <k-sub-nav name="contact">
              <template #title>联系方式</template>
              <k-nav-item name="wechat">微信</k-nav-item>
              <k-nav-item name="qq">qq</k-nav-item>
              <k-sub-nav name="mobile">
                <template #title>手机</template>
                <k-nav-item name="cm">移动</k-nav-item>
                <k-nav-item name="cn">电信</k-nav-item>
              </k-sub-nav>
            </k-sub-nav>
          </k-sub-nav>
          <k-nav-item name="news">资讯</k-nav-item>
        </k-nav>

        data(){
          return {
            selected: 'home',
          }
        }
      `,
      codeStr2:
      `
        <k-nav :selected.sync="selected2" vertical style="width:200px;">
          <k-nav-item name="home">首页
          </k-nav-item>
          <k-sub-nav name="about">
            <template #title>关于</template>
            <k-nav-item name="developer">开发团队</k-nav-item>
            <k-nav-item name="culture">企业文化</k-nav-item>
            <k-sub-nav name="contact">
              <template #title>联系方式</template>
              <k-nav-item name="wechat">微信</k-nav-item>
              <k-nav-item name="qq">qq</k-nav-item>
              <k-sub-nav name="mobile">
                <template #title>手机</template>
                <k-nav-item name="cm">移动</k-nav-item>
                <k-nav-item name="cn">电信</k-nav-item>
              </k-sub-nav>
            </k-sub-nav>
          </k-sub-nav>
          <k-nav-item name="news">资讯</k-nav-item>
        </k-nav>

        data(){
          return {
            selected: '',
          }
        }
      `
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