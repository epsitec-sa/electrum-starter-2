'use strict';

var webpack = require ('webpack');
var path = require ('path');
var root = './src';

module.exports = {
  target: 'web',
  debug: true,
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    publicPath: 'http://localhost:3000/',
    path: path.resolve (root),
    filename: 'bundle.js',
    hotUpdateChunkFilename: 'hot/[id].[hash].hot-update.js',
    hotUpdateMainFilename: 'hot/[hash].hot-update.json'
  },
  recordsPath: path.resolve (path.join (root, 'webpack/webpack.records.json')),
  resolve: {
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
      {test: /\.js$/,  exclude: /node_modules|jquery/, loaders: ['react-hot', 'babel-loader']},
      {test: /\.png$/, loader: 'url-loader?limit=100000&mimetype=image/png'},
      {test: /\.gif$/, loader: 'url-loader?limit=100000&mimetype=image/gif'},
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.(jpg|ttf|eot|svg|woff)/, loader: 'file-loader'}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin (),
    new webpack.NoErrorsPlugin ()
  ]
};
