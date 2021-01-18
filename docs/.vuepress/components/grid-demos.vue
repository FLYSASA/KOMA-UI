<template>
  <div class="wrapper">
    <demos-component
      name="基础用法"
      demokey="0"
      description="通过基础的 24 分栏，迅速简便地创建布局。"
      :codeStr="codeStr1">
      <template v-slot:code>
        <k-row class="demo-row">
          <k-col span="24" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
        </k-row>
        <k-row class="demo-row">
          <k-col span="8" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="8" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="8"class="demo-col">
            <div class="demo-content"></div>
          </k-col>
        </k-row>
        <k-row class="demo-row">
          <k-col span="6" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6"class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6"class="demo-col">
            <div class="demo-content"></div>
          </k-col>
        </k-row>
      </template>
    </demos-component>

    <demos-component
      name="设置间隔"
      demokey="1"
      description="分栏之间存在间隔。"
      codedes="Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。"
      :codeStr="codeStr2">
      <template v-slot:code>
        <k-row class="demo-row" gutter="20">
          <k-col span="8" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="8" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="8"class="demo-col">
            <div class="demo-content"></div>
          </k-col>
        </k-row>
      </template>
    </demos-component>

    <demos-component
      name="对齐方式"
      demokey="2"
      description="通过 flex 布局来对分栏进行灵活的对齐。"
      codedes="通过设置k-row属性align，接受三个属性：left, right, center，来定义子元素的排版方式。"
      :codeStr="codeStr3">
      <template v-slot:code>
        <k-row class="demo-row" gutter="20" align="left">
          <k-col span="6" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6"class="demo-col">
            <div class="demo-content"></div>
          </k-col>
        </k-row>
        <k-row class="demo-row" gutter="20" align="center">
          <k-col span="6" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6"class="demo-col">
            <div class="demo-content"></div>
          </k-col>
        </k-row>
        <k-row class="demo-row" gutter="20" align="right">
          <k-col span="6" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6"class="demo-col">
            <div class="demo-content"></div>
          </k-col>
        </k-row>
      </template>
    </demos-component>

    <demos-component
      name="分栏偏移"
      demokey="3"
      description="支持偏移指定的栏数。"
      codedes="通过设置 col 组件的 offset 属性可以指定分栏偏移的栏数。"
      :codeStr="codeStr4">
      <template v-slot:code>
        <k-row class="demo-row" gutter="20">
          <k-col span="6" offset="6" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6"class="demo-col">
            <div class="demo-content"></div>
          </k-col>
        </k-row>
        <k-row class="demo-row" gutter="20">
          <k-col span="6" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6" offset="6" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6"class="demo-col">
            <div class="demo-content"></div>
          </k-col>
        </k-row>
        <k-row class="demo-row" gutter="20">
          <k-col span="12" class="demo-col"  offset="6">
            <div class="demo-content"></div>
          </k-col>
        </k-row>
      </template>
    </demos-component>

    <demos-component
      name="响应式布局"
      demokey="4"
      description="k-col的响应尺寸以设备命名，koma-UI推行mobile-first, 预设了五个响应尺寸：ipad、narrowPc、pc、widePc 和 默认的手机尺寸。"
      :codeStr="codeStr5">
      <template v-slot:code>
        <k-row class="demo-row" gutter="10">
          <k-col span="6" :ipad="{span: '8'}" :narrowPc="{span: '3'}" :pc="{span: '1'}" :widePc="{span: '4'}" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6" :ipad="{span: '4'}" :narrowPc="{span: '9'}" :pc="{span: '11'}" :widePc="{span: '8'}" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6" :ipad="{span: '4'}" :narrowPc="{span: '9'}" :pc="{span: '11'}" :widePc="{span: '8'}" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6" :ipad="{span: '8'}" :narrowPc="{span: '3'}" :pc="{span: '1'}" :widePc="{span: '4'}" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
        </k-row>
      </template>
    </demos-component>
  </div>
</template>

<script>
import Row from '../../../src/components/grid/row';
import Col from '../../../src/components/grid/col';
import demosComponent from './demos-component.vue';

export default {
  name: 'KomaButton',
  components: {
    demosComponent,
    'k-row': Row,
    'k-col': Col,
  },
  props: {},
  data () {
    return {
      codeStr1: 
      `
        <k-row class="demo-row">
          <k-col span="24" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
        </k-row>
        <k-row class="demo-row">
          <k-col span="8" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="8" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="8"class="demo-col">
            <div class="demo-content"></div>
          </k-col>
        </k-row>
        <k-row class="demo-row">
          <k-col span="6" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6"class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6"class="demo-col">
            <div class="demo-content"></div>
          </k-col>
        </k-row>
      `,
      codeStr2: 
      `
        <k-row class="demo-row" gutter="20">
          <k-col span="8" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="8" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="8"class="demo-col">
            <div class="demo-content"></div>
          </k-col>
        </k-row>

        <style>
          * {
            box-sizing: border-box;
          }
          .demo-row {
            .demo-col:nth-child(odd) {
              .demo-content {
                background: #d3dce6;
              }
            }
            .demo-col:nth-child(even) {
              .demo-content {
                background:#e5e9f2;
              }
            }
            .demo-content {
              border-radius: 4px;
              height: 36px;
              margin-bottom: 20px;
            }
          }
        </style>
      `,
      codeStr3: `
        <k-row class="demo-row" gutter="20" align="left">
          <k-col span="6" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6"class="demo-col">
            <div class="demo-content"></div>
          </k-col>
        </k-row>
        <k-row class="demo-row" gutter="20" align="center">
          <k-col span="6" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6"class="demo-col">
            <div class="demo-content"></div>
          </k-col>
        </k-row>
        <k-row class="demo-row" gutter="20" align="right">
          <k-col span="6" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6"class="demo-col">
            <div class="demo-content"></div>
          </k-col>
        </k-row>
      `,
      codeStr4: `
        <k-row class="demo-row" gutter="20">
          <k-col span="6" offset="6" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6"class="demo-col">
            <div class="demo-content"></div>
          </k-col>
        </k-row>
        <k-row class="demo-row" gutter="20">
          <k-col span="6" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6" offset="6" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6"class="demo-col">
            <div class="demo-content"></div>
          </k-col>
        </k-row>
        <k-row class="demo-row" gutter="20">
          <k-col span="12" class="demo-col"  offset="6">
            <div class="demo-content"></div>
          </k-col>
        </k-row>
      `,
      codeStr5: `
        <k-row class="demo-row" gutter="10">
          <k-col span="6" :ipad="{span: '8'}" :narrowPc="{span: '3'}" :pc="{span: '1'}" :widePc="{span: '4'}" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6" :ipad="{span: '4'}" :narrowPc="{span: '9'}" :pc="{span: '11'}" :widePc="{span: '8'}" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6" :ipad="{span: '4'}" :narrowPc="{span: '9'}" :pc="{span: '11'}" :widePc="{span: '8'}" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
          <k-col span="6" :ipad="{span: '8'}" :narrowPc="{span: '3'}" :pc="{span: '1'}" :widePc="{span: '4'}" class="demo-col">
            <div class="demo-content"></div>
          </k-col>
        </k-row>
      `
    };
  },
}

</script>

<style lang="less" scoped>
  * {
    box-sizing: border-box;
  }
  .demo-row {
      .demo-col:nth-child(odd) {
        .demo-content {
          background: #d3dce6;
        }
      }
      .demo-col:nth-child(even) {
        .demo-content {
          background:#e5e9f2;
        }
      }
      .demo-content {
        border-radius: 4px;
        height: 36px;
        margin-bottom: 20px;
      }
  }
</style>