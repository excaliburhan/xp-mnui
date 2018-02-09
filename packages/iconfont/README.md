# Iconfont 图标

## 说明

基于微信小程序第三方框架wepyjs开发，使用需要先安装wepyjs

## 使用

### 安装组件

> npm install @xpmn/iconfont --save

### 引入组件

```js
// index.wpy
<template>
  <iconfont props="{{props}}"></iconfont>
</template>

<script>
import wepy from 'wepy'
import iconfont from '@xpmn/iconfont'

export default class Index extends wepy.page {
  components = {
    iconfont
  }
}
</script>
```

## props参数

### type[String]

icon类型，支持的参数见http://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.10&manage_type=myprojects&projectId=375015

### size[String, Number]

icon大小，单位为小程序的rpx，默认为44，实际大小为22px

### color[String]

icon颜色，默认为#666
