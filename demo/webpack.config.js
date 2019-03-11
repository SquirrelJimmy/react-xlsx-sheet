const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
  mode: 'development',
  devServer: {
    port: 9000,
    contentBase: path.join(__dirname, './'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    noInfo: true,
    open: true,
    host: 'localhost'
  },
  watch: true,
  entry: {
    index: path.resolve(__dirname, './index.js')
  },
  output: {
    path: undefined,
    pathinfo: true,
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    // We use "/" in development.
    publicPath: '/',
    // Point sourcemap entries to original disk location (format as URL on Windows)
    devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
  },
  resolve: {
    extensions: moduleFileExtensions
      .map(ext => `.${ext}`)
      .filter(ext => useTypeScript || !ext.includes('ts')),
  },
  optimization: {
    concatenateModules: true,
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
      },
      {
        oneOf: [
          {
            loader: require.resolve('file-loader'),
            // Exclude `js` files to keep "css" loader working as it injects
            // its runtime that would otherwise be processed through "file" loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpacks internal loaders.
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, './index.html'),
    }),
  ],
}

module.exports = config
