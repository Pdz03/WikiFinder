const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        // Match js, jsx, ts & tsx files
        test: /\.[jt]sx?$/,
        loader: 'esbuild-loader',
        options: {
        // JavaScript version to compile to
          target: 'es2015',
        },
      },
    ],
  },
});
