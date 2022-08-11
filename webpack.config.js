const path = require('path')
const TerserPlugin = require("terser-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    single: './build/entry.single.js',
    color: './build/entry.color.js',
    special: './build/entry.special.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: `icon.[name].[hash:4].js`,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.svg$/,
        exclude: [
          path.join(__dirname, 'icons/color'),
          path.join(__dirname, 'icons/special'),
        ],
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: '[name]'
            }
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                'inlineStyles',
                'prefixIds',
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
      },
      {
        test: /\.svg$/,
        exclude: [
          path.join(__dirname, 'icons/single'),
          path.join(__dirname, 'icons/special'),
        ],
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: '[name]'
            }
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                'inlineStyles',
                'prefixIds',
                'convertStyleToAttrs',
                'removeStyleElement'
              ],
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        exclude: [
          path.join(__dirname, 'icons/single'),
          path.join(__dirname, 'icons/color'),
        ],
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: '[name]'
            }
          }
        ]
      }
    ],
  },
}
