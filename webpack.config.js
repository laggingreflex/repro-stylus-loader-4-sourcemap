module.exports = {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.styl$/,
      use: ['style-loader', 'css-loader', 'stylus-loader']
    }]
  }
}
