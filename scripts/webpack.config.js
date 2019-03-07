const path = require('path')
const pkg = require('../package.json')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')


const env = process.env.NODE_ENV
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

const babelLoader = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    presets: [
      ["@babel/preset-env", {
        "targets": {
          "browsers": ["last 2 versions", "safari >= 7", "ie >= 11"]
        }
      }],
      '@babel/preset-react',
    ],
    plugins: [
      ["@babel/plugin-transform-typescript", {
        "isTSX": true
      }],
      ["@babel/plugin-proposal-class-properties", {
        "loose": true
      }]
    ]
  }
};

const config = {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, '../dist/module/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: pkg.name,
  },
  resolve: {
    extensions: moduleFileExtensions
      .map(ext => `.${ext}`)
      .filter(ext => useTypeScript || !ext.includes('ts')),
  },
  optimization: {
    concatenateModules: true,
    minimizer: [
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          beautify: false,
          comments: /^$/,
          compress: {
            warnings: false
          },
          mangle: true,
          output: {
            comments: false,
            semicolons: false
          }
        }
      })
    ],
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: [
          '/demo/',
          '/dist/',
          '/node_modules/',
        ],
        use: [
          babelLoader,
        ],

      },
      {
        test: /\.js$/,
        exclude: [
          '/demo/',
          '/dist/',
          '/node_modules/',
        ],
        use: [
          babelLoader
        ]
      }
    ]
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      },
      'react-dom/server': {
        root: 'ReactDOMServer',
        commonjs2: 'react-dom/server',
        commonjs: 'react-dom/server',
        amd: 'react-dom/server'
      },
      'prop-types': {
        root: 'PropTypes',
        commonjs2: 'prop-types',
        commonjs: 'prop-types',
        amd: 'prop-types'
      },
      xlsx: {
        root: 'XLSX',
        commonjs2: 'xlsx',
        commonjs: 'xlsx',
        amd: 'xlsx'
      }
    }
  ],
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
}

module.exports = config
