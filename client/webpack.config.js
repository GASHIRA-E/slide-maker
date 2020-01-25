var distDir = __dirname + '/public/dist';
var path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: distDir,
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@function': path.resolve(__dirname, 'src/function')
    }
  },
  devServer: {
    historyApiFallback: true,
    contentBase: `${__dirname}/public`
  },
  devtool: 'inline-source-map'
};
