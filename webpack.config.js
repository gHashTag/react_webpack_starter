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
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'react-native-web-image-loader?name=[hash].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
