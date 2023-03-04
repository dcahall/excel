const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'bundle.[fullhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src'),
      "@core": path.resolve(__dirname, 'src/core')
    }
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'bundle.[hash].css'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist') },
        ]})
  ],
}