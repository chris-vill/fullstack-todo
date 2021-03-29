const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode : process.env.NODE_ENV || 'development',
  devtool: 'source-map',
  entry: resolve('./src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /styles\/.+\.(css|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /components\/.+\.(css|sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                exportLocalsConvention: "camelCase",
                localIdentName: "[name]__[local]--[hash:base64:10]"
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.sass']
  },
  output: {
    path: resolve('./dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template : resolve('./src/index.html')
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: resolve('./dist'),
  },
};

function resolve(dir) {
  return path.resolve(__dirname, dir);
}
