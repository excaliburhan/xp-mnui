# Btn 按钮

## 说明

基于微信小程序第三方框架wepyjs开发，使用需要先安装wepyjs

## 使用

### 安装组件

> npm install @xpmn/btn --save

### 引入组件

```js
// index.wpy
<template>
  <btn props="{{props}}"></btn>
</template>

<script>
import wepy from 'wepy'
import btn from '@xpmn/btn'

export default class Index extends wepy.page {
  components = {
    btn
  }
}
</script>
```

## props参数

### type[String]

按钮样式，默认为default，可选plain

### size[String]

按钮大小，可选small，mini

### loading[Boolean]

是否显示loading

### disabled[Boolean]

是否disabled

### hoverClass[String]

点击态样式classname，默认为none

### style[Object]

自定义样式，对象格式

## event事件

### tap

点击事件
