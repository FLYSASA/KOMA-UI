# KOMA - 一个 vue 框架的组件库
# author: FLYSASA

[![Build Status](https://travis-ci.org/FLYSASA/KOMA-UI.svg?branch=master)](https://travis-ci.org/FLYSASA/KOMA-UI)

## 介绍
这是一个基于vue的UI框架。

## 开始使用
1. 添加 css 样式
    使用本框架前请在 css 中开启 boder-box
    ```
    * ，*::before, *::after {boder-box: box-sizing;}
    ```

2. 安装 koma-ui
```
 npm i koma-ui -S
```

3. 引入 koma
```
 import { Button } from 'koma-ui'
 import 'koma-ui/dist/index.css'

 export default {
    name: 'app',
    components: {
        k-button: Button
    }
 }
```

4. 引入 svg symbols
```
<script src="//at.alicdn.com/t/font_1122871_u2mcngzlv2.js"></script>
```


## 文档
运行测试用例：
`npm run test:unit`

运行文档：
`npm run docs:dev`

部署文档：
`npm run d`


## 提问

## 变更记录  



