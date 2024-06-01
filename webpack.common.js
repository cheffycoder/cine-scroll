const webpack = require('webpack');
const Dotenv = require('dotenv-webpack')

// Load environment variables from .env file

const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "asset/js/[name].[fullhash].js",
    assetModuleFilename: "asset/includes/[hash][ext][query]",
    publicPath: "/",
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /\.(webp|png|jp(e*)g|svg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json", "..."],
    alias: {
      "@api": path.resolve(__dirname, "./src/api"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@base": path.resolve(__dirname, "./src/base"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@images": path.resolve(__dirname, "./src/images"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html",
      favicon: "./src/images/favicon.ico"
    }),

    // DefinePlugin to inject environment variables into the application
    // Use Dotenv to inject environment variables
    new Dotenv({
      path: './.env', // Path to .env file (this is the default)
      safe: false, // Load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      systemvars: true, // Load all system variables as well (useful for CI environments)
      silent: true // Hide any errors
    }),

  ],
};