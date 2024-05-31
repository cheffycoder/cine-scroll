const { merge } = require('webpack-merge')

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const commonConfig = require('./webpack.common')

const prodConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'asset/css/styles.[name].[fullhash].css',
    }),
    // new BundleAnalyzerPlugin(),
    new CompressionPlugin()
  ],
}

module.exports = merge(commonConfig, prodConfig)
