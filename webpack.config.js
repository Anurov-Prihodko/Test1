// Webpack v4
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { MiniHtmlWebpackPlugin } = require('mini-html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  devServer: {
    overlay: true,
  // contentBase: path.join(__dirname, 'dist'),
  // compress: true,
  // port: 9000,
  },
  plugins: [new MiniCssExtractPlugin()],
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }]
          ]
        }
        }        
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  },
  plugins: [
     new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    // new MiniHtmlWebpackPlugin(
    //   {filename: 'style.css'}
    // ),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    })
  ],

};


 
// const config = {
//   plugins: [
//     new MiniHtmlWebpackPlugin({
//       // Optional, defaults to `index.html`
//       filename: 'demo.html',
//       // Optional
//       publicPath: 'demo/',
//       context: {
//         title: 'Webpack demo',
//         // Optional, defaults to `{ lang: 'en' }`
//         htmlAttributes: {
//           lang: 'en'
//         },
//         // Optional, any additional HTML attached within <head>
//         head: '',
//         // Optional, any additional HTML attached within <body>
//         body: '',
//         // Optional
//         cssAttributes: {
//           rel: 'preload',
//           as: 'style'
//         },
//         // Optional
//         jsAttributes: {
//           defer: true
//         }
//       },
//       // Optional, use this for choosing chunks to include to your page.
//       // See the expanded example below.
//       chunks: ['app']
//     })
//   ]
// };

