const fs = require('fs')
const { exec } = require('child_process')
const path = require('path')

function removeDir(dir) {
  try {
    let files = fs.readdirSync(dir)
    for (const element of files) {
      let newPath = path.join(dir, element)
      let stat = fs.statSync(newPath)
      if (stat.isDirectory()) {
        //如果是文件夹就递归下去
        removeDir(newPath)
      }
      else {
        //删除文件
        fs.unlinkSync(newPath)
      }
    }
    //如果文件夹是空的，就将自己删除掉
    fs.rmdirSync(dir)
  } catch (e) {
    const errorMessage = 'no such file or directory'
    if (e.toString().includes(errorMessage)) {
      makeDir(dir)
    }
  }
}

function makeDir(dir) {
  let paths = dir.split('/')
  for (let i = 1; i < paths.length; i++) {
    let newPath = paths.slice(0, i).join('/')
    try {
      //是否能访问到这个文件，如果能访问到，说明这个文件已经存在，进入循环的下一步。
      //accessSync的第二个参数就是用来判断该文件是否能被读取
      fs.accessSync(newPath, fs.constants.R_OK)
    }
    catch (e) {
      fs.mkdirSync(newPath)
    }
  }
}

removeDir('./dist')
makeDir('./dist')

// 输出当前目录（不一定是代码所在的目录）下的文件和文件夹
exec('webpack build', (err) => {
  if (err) {
    console.log({ err })
  }
})
