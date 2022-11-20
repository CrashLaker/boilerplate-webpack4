const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
      filename: path.resolve(__dirname, 'dist/index0.html'),
      template: 'public/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        // {
        //   //Wildcard is specified hence will copy only css files
        //   from: 'public/*.md', //Will resolve to RepoDir/src/css and all *.css files from this directory
        //   to: 'dist/'
        // },
        {
          //Wildcard is specified hence will copy only css files
          // from: path.resolve(__dirname, 'public/icons'),
          // to: path.resolve(__dirname, 'dist/icons'),
          from: "public/icons",
          to: "icons",
          noErrorOnMissing: true,
        },
        {
          //Wildcard is specified hence will copy only css files
          // from: path.resolve(__dirname, 'public/*.md'),
          from: 'public/*.md',
          to: '[name].md',
        },
      ]
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};