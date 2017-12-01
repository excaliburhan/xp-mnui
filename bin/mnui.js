#!/usr/bin/env node

var program = require('commander')
var package = require('../package.json')

program
  .version(package.version)
  .usage('<command> [options]')
  .command('ls', '查看xp-mnui组件列表')
  .command('add', '添加xp-mnui组件')
  .parse(process.argv)
