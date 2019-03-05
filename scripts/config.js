const path = require('path')
const fs = require('fs')
const pkg = require('../package.json')
const typescript = require('typescript')
const rollupTypescript = require('rollup-plugin-typescript')
const {uglify} = require('rollup-plugin-uglify')
// const commonjs = require('rollup-plugin-commonjs')
const resolve = require('rollup-plugin-node-resolve')

const env = process.env.NODE_ENV
const target = process.env.TARGET

const plugins = [
  rollupTypescript({ typescript, importHelpers: true }),
  resolve(),
]

if (env === 'production') {

} else {
  plugins.push(uglify())
}

if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist')
}

const config = {
  input: path.resolve(__dirname, '../', 'src/index.tsx'),
  output: {
    file: path.resolve(__dirname, '../', 'dist/index.js'),
    format: target,
    name: pkg.name
  },
  plugins,
}


module.exports = config
