'use strict';

var webpack = require ('webpack');
var path = require ('path');
var output = './webpack';

module.exports = {
  target: 'web',
  debug: true,
  devtool: 'source-map',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve (output),
    publicPath: 'http://localhost:3000/',
    // hotUpdateChunkFilename: 'hot/[id].[hash].hot-update.js',
    // hotUpdateMainFilename: 'hot/[hash].hot-update.json'
  },

  // recordsPath: path.resolve (path.join (output, 'webpack/webpack.records.json')),

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin (),
    new webpack.NoErrorsPlugin ()
  ],

  module: {
    loaders: [
      {test: /\.js$/,  exclude: /node_modules|jquery/, loaders: ['babel-loader']},
/*    {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
      {test: /\.png$/, loader: 'url-loader?limit=100000&mimetype=image/png'},
      {test: /\.gif$/, loader: 'url-loader?limit=100000&mimetype=image/gif'},
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.(jpg|ttf|eot|svg|woff)/, loader: 'file-loader'} */
    ]
  },
};
