<template>
  <div class="wrapper sticky-demo">
    <demos-component
      name="基础用法"
      demokey="0"
      description="粘滞组件顾名思义即让内部内容固定在页面的某个位置不受滚动影响。"
      :codeStr="codeStr1"
      codedes="可以通过 distance 属性来设置固定时距离页面顶部的距离。">
      <template v-slot:code>
        <div class="sticky-demo-content">
          <p>段落1</p>
          <p>段落2</p>
          <p>段落3</p>
          <p>段落4</p>
          <p>段落5</p>
          <p>段落6</p>
          <p>段落7</p>
          <p>段落8</p>
          <p>段落9</p>
          <p>段落1</p>
          <p>段落2</p>
          <p>段落3</p>
          <p>段落4</p>
          <p>段落5</p>
          <p>段落6</p>
          <p>段落7</p>
          <p>段落8</p>
          <p>段落9</p>
          <p>段落1</p>
          <p>段落2</p>
          <p>段落3</p>
          <p>段落4</p>
          <p>段落5</p>
          <p>段落6</p>
          <p>段落7</p>
          <p>段落8</p>
          <p>段落9</p>
          <k-sticky :distance="100">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GhcDzDyr_yvRAr4rkSR2p3M5NedTq4gLjU42GqB61FbccsfnSPoIT5VxYg&usqp=CAc" alt="">
          </k-sticky>
          <p>段落10</p>
          <p>段落11</p>
          <p>段落12</p>
          <p>段落13</p>
          <p>段落14</p>
          <p>段落15</p>
          <p>段落16</p>
          <p>段落17</p>
          <p>段落18</p>
          <p>段落19</p>
          <p>段落20</p>
          <p>段落21</p>
          <p>段落22</p>
          <p>段落23</p>
          <p>段落24</p>
          <p>段落25</p>
          <p>段落26</p>
          <p>段落27</p>
          <p>段落28</p>
          <p>段落29</p>
          <p>段落30</p>
        </div>
      </template>
    </demos-component>
  </div>
</template>

<script>
import Sticky from '../../../src/components/sticky';
import demosComponent from './demos-component.vue';

export default {
  name: 'KomaDatePickerDemo',
  components: {
    demosComponent,
    'k-sticky': Sticky,
  },
  props: {},
  data () {
    return {
      codeStr1: 
      `
        <div class="sticky-demo-content">
          <p>段落1</p>
          <p>段落2</p>
          <p>段落3</p>
          <p>段落4</p>
          <p>段落5</p>
          <p>段落6</p>
          <p>段落7</p>
          <p>段落8</p>
          <p>段落9</p>
          <p>段落1</p>
          <p>段落2</p>
          <p>段落3</p>
          <p>段落4</p>
          <p>段落5</p>
          <p>段落6</p>
          <p>段落7</p>
          <p>段落8</p>
          <p>段落9</p>
          <p>段落1</p>
          <p>段落2</p>
          <p>段落3</p>
          <p>段落4</p>
          <p>段落5</p>
          <p>段落6</p>
          <p>段落7</p>
          <p>段落8</p>
          <p>段落9</p>
          <k-sticky :distance="100">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GhcDzDyr_yvRAr4rkSR2p3M5NedTq4gLjU42GqB61FbccsfnSPoIT5VxYg&usqp=CAc" alt="">
          </k-sticky>
          <p>段落10</p>
          <p>段落11</p>
          <p>段落12</p>
          <p>段落13</p>
          <p>段落14</p>
          <p>段落15</p>
          <p>段落16</p>
          <p>段落17</p>
          <p>段落18</p>
          <p>段落19</p>
          <p>段落20</p>
          <p>段落21</p>
          <p>段落22</p>
          <p>段落23</p>
          <p>段落24</p>
          <p>段落25</p>
          <p>段落26</p>
          <p>段落27</p>
          <p>段落28</p>
          <p>段落29</p>
          <p>段落30</p>
        </div>

        <style lang="less" scoped>
          .sticky-demo-content {
            width: 600px; 
            border: 1px solid #eee;
            padding: 10px;
          }
        <style>
      `,
    };
  },
}

</script>

<style lang="less" scoped>
* {
    box-sizing: border-box;
  }
  .sticky-demo {
    &-content {
      width: 600px; 
      border: 1px solid #eee;
      padding: 10px;
    }
  }
</style>