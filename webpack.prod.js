const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin(),
    new ExtractTextPlugin('[name].css')
  ]
})
