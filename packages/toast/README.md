# Toast 轻提示

## 说明

基于微信小程序第三方框架wepyjs开发，使用需要先安装wepyjs

## 使用

### 安装组件

> npm install xp-mnui-toast --save

### 引入组件

```js
// index.wpy
<template>
  <toast {{props}}></toast>
</template>

<script>
import wepy from 'wepy'
import toast from 'xp-mnui-toast'

export default class Index extends wepy.page {
  components = {
    toast
  }
}
</script>
```

### 调用组件

```js
this.$invoke('toast', 'show', { // 参数
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

### icon[String]

icon显示

### text[String]

显示的文字

### duration[Number]

持续时间，默认1500毫秒

### style[Object]

样式，通过写在标签中的props生效

