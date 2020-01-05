const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const {
  prod_Path,
  src_Path
} = require('./path');
const {
  selectedPreprocessor
} = require('./loader');

module.exports = {
  entry: {
    main: './' + src_Path + '/index.ts'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, prod_Path),
    filename: '[name].[chunkhash].js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: 'pug-loader'
    },

      {
      test: /\.ts?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: selectedPreprocessor.fileRegexp,
      use: [{
          loader: MiniCssExtractPlugin.loader
        },
        {
          loader: 'css-loader',
          options: {
            modules: false,
            sourceMap: true
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: selectedPreprocessor.loaderName,
          options: {
            sourceMap: true
          }
        },
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new HtmlWebpackPlugin({
      template: './' + src_Path + '/index.pug',

    })
  ]
};
