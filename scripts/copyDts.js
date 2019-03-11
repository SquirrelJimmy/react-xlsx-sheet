const fs = require('fs')
const path = require('path')

const resolve = (p) => path.resolve(__dirname,  p)
const src = '../src'

const isDts = (name) => /\w+\.d\.ts$/.test(name)

const target = '../' + process.env.BABEL_ENV

const isDirectory = (path) => fs.statSync(path).isDirectory()


const copyFile = (path, tPath) => {
  const uPath = resolve(path + '/')
  const files = fs.readdirSync(uPath)
  files.map(item => {
    const sourcePath = uPath + '/' + item
    const distPath = resolve(tPath + '/' + item)
    if (isDts(sourcePath)) {
      fs.copyFileSync(sourcePath, distPath)
    } else if (isDirectory(sourcePath)) {
      copyFile(sourcePath, distPath)
    }
  })
}
copyFile(src, target)
console.log('*.d.ts copy finished !')
