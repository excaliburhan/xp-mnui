# List 列表

## 说明

基于微信小程序第三方框架wepyjs开发，使用需要先安装wepyjs

## 使用

### 安装组件

> npm install @mnui/list --save

### 引入组件

```js
// index.wpy
<template>
  <list></list>
</template>

<script>
import wepy from 'wepy'
import list from '@mnui/list'

export default class Index extends wepy.page {
  components = {
    list
  }
}
</script>
```
