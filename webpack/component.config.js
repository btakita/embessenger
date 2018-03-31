const path = require('path')
const mode = process.env.NODE_ENV
const config = {
  entry: {
    component: path.resolve(__dirname, 'app/component.mjs')
  },
  output: {
    filename: 'embessenger.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Embessenger'
  },
	resolve: {
		extensions: ['.js', '.json', '.html']
	},
  target: 'web',
	module: {
    rules: [
      { test: /\.(js|mjs|html|svelte|jsx)$/,
        loaders: 'buble-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, '..')
      },
      { test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            hydratable: true,
            cascade: false,
            store: true,
            hotReload: true,
            style
          }
        }
      },
    ]
  },
  mode
}
module.exports = config