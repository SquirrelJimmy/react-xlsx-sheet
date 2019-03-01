const webpack = require('webpack')
const path = require('path')

const ENV = process.env.NODE_ENV === 'production'


const prodConfig = {
  mode: 'production',
  entry: {
    ['react-xlsx-sheet.min.js']: './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'react-xlsx-sheet',
    libraryTarget: 'umd'
  }
}
