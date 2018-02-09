# ListItem 列表项

## 说明

基于微信小程序第三方框架 wepyjs 开发，使用需要先安装 wepyjs

## 使用

### 安装组件

> npm install @mnui/listItem --save

### 引入组件

```js
// index.wpy
<template>
  <list>
    <repeat for="{{list}}" key="index" index="index" item="item">
      <listItem :icon="item.icon" :title="item.title" :link="item.link" :desc="item.desc :arrow="item.arrow"></listItem>
    </repeat>
  </list>
</template>

<script>
import wepy from 'wepy'
import listItem from '@mnui/listItem'

export default class Index extends wepy.page {
  components = {
    listItem
  }
}
</script>
```

## props 参数

### icon[String]

icon 路径

### title[String]

标题

### link[String]

超链接

### desc[String]

描述

### arrow[Boolean]

是否显示箭头，有超链接默认有

## event 事件

### tap

不是超链接情况下，可以设置 tap 事件
