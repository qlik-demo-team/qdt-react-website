const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index',
  ],
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    chunkFilename: 'js/[name].[hash].bundle.js',
    filename: 'js/[name].[hash].bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    publicPath: '/',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        include: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [['@babel/preset-env', {
            targets: {
              edge: '17',
              firefox: '60',
              chrome: '67',
              safari: '11.1',
            },
            useBuiltIns: 'usage',
          }], '@babel/preset-react'],
          plugins: [['@babel/plugin-proposal-decorators', { legacy: true }], '@babel/plugin-transform-spread', '@babel/plugin-syntax-dynamic-import', 'transform-class-properties', 'react-hot-loader/babel'],
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      },
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins() { // post css plugins, can be exported to postcss.config.js
              return [
                require('precss'),
                require('autoprefixer'),
              ];
            },
          },
        }, {
          loader: 'sass-loader', // compiles SASS to CSS
        }],
      },
      // {
      //   test: /\.(eot|png|jpg|svg|ttf|woff|woff2)$/,
      //   include : path.join(__dirname, 'assets'),
      //   loader: 'file-loader',
      //   options: {
      //     name: '[name].[ext]',
      //   },
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  performance: {
    maxEntrypointSize: 1000000,
    maxAssetSize: 1000000,
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      // name: true,
      name(module) {
        // generate a chunk name...
        // ...
      },
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: -10,
        },
        default: {
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: true,
          ecma: 5,
          mangle: true,
        },
        sourceMap: true,
      }),
    ],
  },
};
