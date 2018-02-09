# Copyright 版权信息

## 说明

基于微信小程序第三方框架wepyjs开发，使用需要先安装wepyjs

## 使用

### 安装组件

> npm install @xpmn/copyright --save

### 引入组件

```
// index.wpy
<template>
  <copyright :textStyle="textStyle"></copyright>
</template>

<script>
import wepy from 'wepy'
import copyright from '@xpmn/copyright'

export default class Index extends wepy.page {
  components = {
    copyright
  }
  data = {
    textStyle: {
      color: 'red'
    }
  }
}
</script>
```

## props参数

### text[String]

文字，默认：由奇点云提供技术支持

### textStyle[Object]

文字样式

### logo[String]

logo地址，默认：https://static.excaliburhan.com/xpmnui/copyright-logo.png

### logoStyle[Object]

logo样式
