'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = validate({
  devtool: 'source-map',

  entry: [
    path.join(__dirname, 'src', 'index')
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js',
    publicPath: ''
  },

  plugins: [
    new DashboardPlugin
  ],

  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'standard-loader'
    }],

    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }]
  },

  resolve: {
    alias: {
      src: path.join(__dirname, 'src'),
      mUtils: path.join(__dirname, 'src', 'utils')
    }
  }
})
