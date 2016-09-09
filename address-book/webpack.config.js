var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

  entry: './src/main.ts',
  output: {
    path: './dist',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {test: /\.ts$/, loader : 'ts'}
    ]
  },
  resolve: {
    extensions: ['','.js','.ts']
  },
  devServer: {
    port: 8080,
    proxy: {
      '/[a-zA-Z0-9]*': {
        target: 'http://localhost:8080/',
        pathRewrite: {
          '/[a-zA-Z0-9]*' : '/'
        }
      },
      '/[a-zA-Z0-9]*/[a-zA-Z0-9]*': {
        target: 'http://localhost:8080/',
        pathRewrite: {
          '/[a-zA-Z0-9]*/[a-zA-Z0-9]*' : '/'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ]
};
