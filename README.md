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

    你还需要设置默认颜色等变量（后续会改为less变量）
    ```
    :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
            }
    ```
    IE15 及以上都支持此样式

2. 安装 koma-ui
```
 npm i --save koma-ui
```

3. 引入 gulu
```
 import { Button } from 'koma-ui'
 import 'koma-ui/dist/index.css'

 export default {
    name: 'app',
    components: {
        g-button: Button
    }
 }
```

4. 引入 svg symbols
```
<script src="//at.alicdn.com/t/font_1122871_u2mcngzlv2.js"></script>
```


## 文档

## 提问

## 变更记录  



