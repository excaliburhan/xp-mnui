# Toptips 顶部提示

## 说明

基于微信小程序第三方框架wepyjs开发，使用需要先安装wepyjs

## 使用

### 安装组件

> npm install @xpmn/toptips --save

### 引入组件

```js
// index.wpy
<template>
  <toptips {{props}}></toptips>
</template>

<script>
import wepy from 'wepy'
import toptips from '@xpmn/toptips'

export default class Index extends wepy.page {
  components = {
    toptips
  }
}
</script>
```

### 调用组件

```js
this.$invoke('toptips', 'show', { // 参数
  text: '调用成功',
})
.then((res) => {
  console.log('done')
})
.catch((err) => {
  console.log('error')
})
```

## 参数

### text[String]

显示的文字

### duration[Number]

持续时间，默认1500毫秒

### style[Object]

样式，通过写在标签中的props生效

