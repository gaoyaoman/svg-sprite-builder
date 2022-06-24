const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'icon.[hash:6].js',
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'icon-[name]'
            }
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                'convertStyleToAttrs',
                'removeStyleElement',
                {
                  name: 'removeAttrs',
                  params: {
                    attrs: 'fill',
                  },
                }
              ],
            }
          }
        ]
      }
    ],
  },
}
