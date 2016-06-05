const path = require( 'path' );
const webpack = require( 'webpack' );

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'source');

module.exports = {
  APP_DIR,
  devtool : 'cheap-module-eval-source-map',
  entry : [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    APP_DIR + '/index.js'
  ],
  resolve : {
    extensions : ['', '.js', '.jsx']
  },
  output : {
    path : BUILD_DIR,
    publicPath : '/dist/',
    filename : 'bundle.js'
  },
  plugins : [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module : {
    loaders : [{
      test : /\.jsx?$/,
      loaders : ['babel'],
      exclude : /node_modules/,
      include : APP_DIR
    }]
  }
};
