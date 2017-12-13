# Msg 提示页

## 说明

基于微信小程序第三方框架wepyjs开发，使用需要先安装wepyjs

## 使用

### 安装组件

> npm install xp-mnui-msg --save

### 引入组件

```js
// index.wpy
<template>
  <btn props="{{props}}"></btn>
</template>

<script>
import wepy from 'wepy'
import msg from 'xp-mnui-msg'

export default class Index extends wepy.page {
  components = {
    msg
  }


}
</script>
```

## props参数

### iconObj[Object]

【选填】icon样式，默认为{ type: 'success', size: '100', color: '' }

### text[Stirng]

【选填】说明文字

### btnObj[Object]

【选填】按钮样式，默认为{ show: true, text: '完成', style: '', callback: null }
