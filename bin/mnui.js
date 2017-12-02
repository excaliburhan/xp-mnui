#!/usr/bin/env node

const program = require('commander')
const pkg = require('../package.json')
const utils = require('../lib/utils')
const localVer = pkg.version

// exit打印空行
process.on('exit', () => { console.log() })

function help () {
  program
    .version(localVer)
    .usage('<command> [options]')
    .command('ls', '查看组件列表')
    .command('add', '添加组件')
    .parse(process.argv)
}

function checkVer () {
  utils.execSec('npm info xp-mnui version', false, 2)
  .then((remoteVer) => {
    remoteVer = remoteVer.trim() // 需要删除空格
    if (remoteVer && remoteVer !== localVer) {
      utils.log(`最新版本${remoteVer}，本地版本${localVer}`)
      utils.log('为了更好地使用xp-mnui，建议使用 npm i -g xp-mnui 更新版本', 'yellow')
    }
    help()
  })
  .catch((err) => {
    help()
  })
}

checkVer()
