const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssPlugin = require('mini-css-extract-plugin')
const { ALL } = require('dns')

const isDev = process.env.NODE_ENV === 'development'
console.log('IS DEV:', isDev)

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './index.js',
    analytics: './analytics.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.json'],
    // alias: {
    // ======== чтобы заработал alias нужно чтобы прекратил
    //  работу IntelliSense для этих импортов в VSCode. ========
    //   '@models': path.resolve(__dirname, 'src/models'),
    //   '@': path.resolve(__dirname, 'src'),
    // },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    port: 4200,
    hot: isDev,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'favicon.ico', to: '' }],
    }),
    new MiniCssPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        // ======== webpack читает с права на лево ========
        use: [
          {
            loader: MiniCssPlugin.loader,
            options: {
              // ======== hmr is not a valid option (anmyore) for the
              // Mini CSS Extract Plugin and should be removed. ========
              // hot: isDev,
              // reloadAll: true,
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader'],
      },
      {
        test: /\.xml$/,
        use: ['xml-loader'],
      },
      {
        test: /\.csv$/,
        use: ['csv-loader'],
      },
    ],
  },
}
