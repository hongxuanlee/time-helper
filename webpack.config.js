var webpack = require('webpack');
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

const config = {
  entry: {
    app: ['webpack/hot/dev-server', './src/app.js']
  },
  devtool: 'source-map',
  output: {
    path: './public/js',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/built/'
  },
  devServer: {
    contentBase: './public',
    publicPath: 'http://localhost:8080/built/'
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))
  ]
}

config.target = webpackTargetElectronRenderer(config);

module.exports = config;
