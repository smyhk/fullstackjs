module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
};