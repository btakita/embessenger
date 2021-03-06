const config = require('sapper/webpack/config.js')
const pkg = require('../package.json')
const {style} = require('./lib.js')
module.exports = {
  entry: config.server.entry(),
  output: config.server.output(),
  target: 'node',
  resolve: {
    extensions: ['.js', '.json', '.html']
  },
  externals: Object.keys(pkg.dependencies),
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            css: false,
            cascade: false,
            store: true,
            generate: 'ssr',
            preprocess: {
              style
            }
          }
        }
      }
    ]
  },
  mode: process.env.NODE_ENV,
  performance: {
    hints: false // it doesn't matter if server.js is large
  }
}