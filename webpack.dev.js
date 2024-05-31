const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: process.env.PORT || 9191,
    host: '0.0.0.0',
    historyApiFallback: true, // Serve index.html in case of any 404 responses.
    compress: true, // Enavle G-zip compression for everything served
    hot: true, // Hot Module Replacement
    open: false, // As soon as Dev Server is spawned please open the browser
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
}

module.exports = merge(commonConfig, devConfig)
