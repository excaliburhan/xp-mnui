#!/usr/bin/env node

const program = require('commander')
const pkg = require('../package.json')
const utils = require('../lib/utils')
const localVer = pkg.version

// exit打印空行
process.on('exit', () => { console.log() })

program
  .version(localVer)
  .usage('<组件名> [依赖管理工具]')
  .on('--help', () => {
    utils.log('  > 使用方法:')
    utils.log('    # 安装toptips组件（默认使用yarn安装依赖，yarn不存在则使用npm）', 'gray')
    console.log('    $ mnui add @mnui/toptips')
    utils.log('    # 组件名可以指定版本号，@mnui组件可以省略前缀', 'gray')
    console.log('    $ mnui add toptips@1.0.0')
    utils.log('    # 更换依赖管理工具（使用npm安装依赖）', 'gray')
    console.log('    $ mnui add toptips npm')
    utils.log('    # 安装第三方wepy组件', 'gray')
    console.log('    $ mnui add wepy-com-toast')
  })

function help () {
  program.parse(process.argv)
  if (program.args.length < 1) return program.help()
}

function run () {
  const args = program.args
  let pkgName = args[0]
  let installer = args[1]
  let prefixArr = ['copyright', 'iconfont', 'toptips'] // 省略前缀的数组
  if (prefixArr.includes(pkgName) && pkgName.indexOf('@mnui') === -1) {
    pkgName = '@mnui/' + pkgName
  }
  if (!installer) {
    installDep(pkgName, 'yarn')
    .then(() => {
      utils.log(pkgName + ' 安装成功！', 'green')
    })
    .catch((err) => {
      utils.log('使用yarn安装依赖失败，更换npm安装...', 'red')
      installDep(pkgName, 'npm')
      .then(() => {
        utils.log(pkgName + ' 安装成功！', 'green')
      })
      .catch((err) => {
        utils.log('安装依赖失败，请检查组件名[' + pkgName + ']是否正确...', 'red')
      })
    })
  } else {
    installDep(pkgName, installer)
    .then(() => {
      utils.log(pkgName + ' 安装成功！', 'green')
    })
    .catch((err) => {
      utils.log('安装依赖失败，请检查组件名[' + pkgName + ']是否正确...', 'red')
    })
  }
}

function installDep (pkgName, installer) {
  if (installer === 'yarn') {
    console.log()
    return utils.exec(`yarn add --dev ${pkgName}`, true)
  } else if (installer === 'npm') {
    console.log()
    return utils.exec(`npm install --save ${pkgName}`, true)
  }
}

// help提示
help()

// 安装组件
run()
