<template>
  <div class="wrapper carousel-demo">
    <demos-component
      name="基础用法"
      demokey="0"
      description="最简单的用法。"
      :codeStr="codeStr1">
      <template v-slot:code>
        <k-carousel :selected.sync="selected">
          <k-carousel-item :name="i" v-for="i in 5">
            <div class="demo-content">{{ i }}</div>
          </k-carousel-item>
        </k-carousel>
      </template>
    </demos-component>

    <demos-component
      name="自动播放"
      demokey="1"
      description="autoPlay属性控制是否自动播放，默认为true。"
      :codeStr="codeStr2">
      <template v-slot:code>
        <k-carousel :selected.sync="selected2" :autoPlay="false">
          <k-carousel-item :name="i" v-for="i in 5">
            <div class="demo-content">{{ i }}</div>
          </k-carousel-item>
        </k-carousel>
      </template>
    </demos-component>

    <demos-component
      name="幻灯片切换时间"
      demokey="2"
      description="autoPlayDelay 属性值是毫秒数，默认为3000ms切换到下一张。"
      :codeStr="codeStr3">
      <template v-slot:code>
        <k-carousel :selected.sync="selected3" :autoPlayDelay="1000">
          <k-carousel-item :name="i" v-for="i in 5">
            <div class="demo-content">{{ i }}</div>
          </k-carousel-item>
        </k-carousel>
      </template>
    </demos-component>
  </div>
</template>

<script>
import Button from '../../../src/components/button/button';
import Icon from '../../../src/components/icon';
import Carousel from '../../../src/components/carousel/carousel';
import CarouselItem from '../../../src/components/carousel/carousel-item';
import demosComponent from './demos-component.vue';

export default {
  name: 'KomaButton',
  components: {
    demosComponent,
    'k-button': Button,
    'k-icon': Icon,
    'k-carousel': Carousel,
    'k-carousel-item': CarouselItem,
  },
  props: {},
  data () {
    return {
      codeStr1: 
      `
        <k-carousel :selected.sync="selected">
          <k-carousel-item :name="i" v-for="i in 5">
            <div class="demo-content">{{ i }}</div>
          </k-carousel-item>
        </k-carousel>
        
        data() {
          return {
            selected: 3
          }
        }

        <style>
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
        </style>
      `,
      codeStr2: 
      `
        <k-carousel :selected.sync="selected2" :autoPlay="false">
          <k-carousel-item :name="i" v-for="i in 5">
            <div class="demo-content">{{ i }}</div>
          </k-carousel-item>
        </k-carousel>
      `,
      codeStr3: 
      `
        <k-carousel :selected.sync="selected3" :autoPlayDelay="1000">
          <k-carousel-item :name="i" v-for="i in 5">
            <div class="demo-content">{{ i }}</div>
          </k-carousel-item>
        </k-carousel>
      `,
      selected: 3,
      selected2: 1,
      selected3: 1,
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