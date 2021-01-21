# KOMA - 一个基于vue框架的UI组件库
# author: FLYSASA

[![Build Status](https://travis-ci.org/FLYSASA/KOMA-UI.svg?branch=master)](https://travis-ci.org/github/FLYSASA/KOMA-UI) 
[![license](https://img.shields.io/github/license/FLYSASA/KOMA-UI?color=blue)](https://github.com/FLYSASA/KOMA-UI/blob/master/LICENSE)
[![NPM](https://img.shields.io/npm/v/koma-ui)](https://www.npmjs.com/package/koma-ui)
[![Vue](https://img.shields.io/npm/v/vue?label=vue)](https://www.npmjs.com/package/vue/v/2.6.11)

## 介绍
这是一个基于vue的UI框架。

目前做的比较成熟稳定的UI库有elementUI，ant-design等，为什么我还要自己再去花那么多时间和精力去造轮子？
我觉得会用轮子和造轮子完全是两码事，碰到业务上的需求，现在的UI库无法满足你时，你可以随时对你的轮子进行拓展，持续封装业务中高复用的代码，深化自己造轮子的能力，绝对会让自己开发效率事半功倍。

## 项目特点
#### 1. 使用Karma作为测试运行器，Mocha、Sinon编写测试用例，Travis-ci自动持续化测试，保证库的代码质量。
#### 2. 使用单向数据流、发布订阅模式、懒加载等技术概念。
#### 3. 组件的样式、色彩的搭配参考了一些成熟的UI框架（如Element UI、ant-design）


## 开始使用
1. 添加 css 样式
    使用本框架前请在 css 中开启 boder-box
    ```
    * ，*::before, *::after {boder-box: box-sizing;}
    ```

2. 安装 koma-ui
```bash
 npm i koma-ui -S
```

3. 引入 koma
```js
 import { Button } from 'koma-ui'
 import 'koma-ui/dist/index.css'

 export default {
    name: 'app',
    components: {
        'k-button': Button
    }
 }
```


## 文档
运行测试用例：
`npm run test:unit`

运行文档：
`npm run docs:dev`

部署文档：
`npm run d`




