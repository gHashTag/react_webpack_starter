const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ENV = process.env
const isProduction = ENV.NODE_ENV === 'production'

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'index_bundle.js'
  },
  devtool: isProduction
    ? 'source-map'
    : 'eval-source-map' ,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
