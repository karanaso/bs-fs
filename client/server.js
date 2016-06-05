// http://andrewhfarmer.com/3-ways-webpack-hmr/
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const config = require('./webpack.config');
var path = require('path');
const app = express();
const port = 3000;

const compiler = webpack(config);
console.log(config.output.path);
console.log(config.output.publicPath)
app.use(webpackDevMiddleware(compiler, {
  hot : true,
  filename : 'bundle.js',
  noInfo : true,
  lazy : false,
  publicPath : config.output.publicPath,
  stats : {
    color : true
  },
  historyApiFallback : true
}));

app.use(webpackHotMiddleware(compiler,{
  log : console.log,
  path : '/__webpack_hmr',
  heartbeat : 10 * 1000
}));

app.use('/dist', express.static( __dirname + "/dist/"));
app.get( "/", function(req, res) {
  res.sendFile( config.APP_DIR + '/index.html');
});

app.listen( port, function( error ) {
  if ( error ) {
    console.error( error )
  } else {
    console.info( "==>  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port )
  }
});
