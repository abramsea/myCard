'use strict';

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'app.js',
    path: __dirname + './dist/js',
	chunkFormat: 'commonjs'
  },

  devtool: "source-map",

  module: {}
};