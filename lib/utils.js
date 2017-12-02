/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-12-01 06:32:00
 * @modify date 2017-12-01 06:32:00
 * @desc [utils方法]
 */

const { exec } = require('child_process')
const chalk = require('chalk')

module.exports = {
  // 执行bash，返回promise
  exec (cmd, display) {
    return new Promise((resolve, reject) => {
      let pcmd = exec(cmd, (err, stdout, stderr) => {
        if (err) {
          reject(err)
        } else {
          resolve(stdout, stderr)
        }
      })
      pcmd.stdout.on('data', (chunk) => {
        display && process.stdout.write(chunk)
      })
      pcmd.stderr.on('data', (chunk) => {
        display && process.stdout.write(chunk)
      })
    })
  },
  // 一定时间内执行bash，超时直接reject
  execSec (cmd, display, sec = 0) {
    let tasks = []
    if (sec) {
      let tcmd = new Promise((resolve, reject) => {
        setTimeout(() => { reject('超时') }, sec * 1000)
      })
      tasks.push(tcmd)
    }
    let pcmd = this.exec(cmd, display)
    tasks.push(pcmd)
    return Promise.race(tasks)
  },
  // 打印log
  log (str, color = 'green') {
    console.log()
    console.log(chalk[color](str))
  },
  // 填充字符串
  fillStr (str, len) {
    if (!len || str.length >= len) return str
    return str + ' '.repeat(len - str.length)
  },
}
