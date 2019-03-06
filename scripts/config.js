const path = require('path')
const fs = require('fs')
const pkg = require('../package.json')
// const typescript = require('typescript')

const env = process.env.NODE_ENV
const target = process.env.TARGET
const useTypeScript = true
const moduleFileExtensions = [
  'web.mjs',
  'mjs',
  'web.js',
  'js',
  'web.ts',
  'ts',
  'web.tsx',
  'tsx',
  'json',
  'web.jsx',
  'jsx',
]
const config = {
  mode: 'development',
  entry: {
    vendor: ['react', 'react-dom'],
    index: path.resolve(__dirname, '../src/index.tsx')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: moduleFileExtensions
      .map(ext => `.${ext}`)
      .filter(ext => useTypeScript || !ext.includes('ts')),
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
				exclude: ['/node_modules/'],
				use: [
					'ts-loader',
				]
      }
    ]
  }
}

module.exports = config
