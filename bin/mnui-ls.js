#!/usr/bin/env node

const path = require('path')
const glob = require('glob')
const chalk = require('chalk')
const utils = require('../lib/utils')
const globPath = path.resolve(__dirname, '../packages/**/package.json')
const components = require('../components.json')

// exit打印空行
process.on('exit', () => { console.log() })

function logFiles (files) {
  if (files.length > 0) {
    utils.log('  > xp-mnui组件列表:')
    utils.log('  <组件名> [版本号] - {描述}', 'white')
    console.log()
    files.forEach((filename) => {
      const pkg = require(filename)
      const pkgName = utils.fillStr(pkg.name, 17) // 组件名的字符数
      console.log(
        '  ' + chalk.yellow('★') +
        '  ' + chalk.cyan(`${pkgName} [${pkg.version}]`) +
        ' - ' + pkg.description
      )
    })
  } else {
    utils.log('  目前还没有xp-mnui组件', 'yellow')
  }
}

function logFiles3 (components) {
  if (Object.keys(components).length > 0) {
    utils.log('  > 第三方组件列表:')
    utils.log('  <组件名> - {描述}', 'white')
    console.log()
    for (let key in components) {
      console.log(
        '  ' + chalk.yellow('▪︎') +
        '  ' + chalk.cyan(key) +
        ' - ' + components[key]
      )
    }
  } else {
    utils.log('  目前还没有第三方组件', 'yellow')
  }
}

glob(globPath, (err, files) => {
  if (err) {
    utils.log(err, 'red')
    process.exit(1)
  }
  logFiles(files)
  logFiles3(components)
})
