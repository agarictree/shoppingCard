let HtmlWebpackPlugin = require('html-webpack-plugin');
let HtmlTemplatePlugin = require('webpack-template-plugin');
let CopyWebpackPlugin = require("copy-webpack-plugin");
let path = require("path");
require('babel-polyfill');

module.exports = {
    entry: {
      app: ['babel-polyfill', "./src/index.js"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        watchContentBase: true,
        progress: true
    },
    mode: "development",
    module: {
        rules: [
            { test: /\.css$/i,
                use: [{ loader: 'style-loader', options: { injectType: 'linkTag' }}, {loader: 'file-loader'}]
            },
            { test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: {
                    presets:["@babel/preset-env", "@babel/preset-react"]
                }
            },
            { test: /\.(png|svg|jpg|gif)$/,
                loader: "file-loader",
                options: {
                  name: "img/[name].[ext]"
                }
            },
            {
                test: /\.(scss)$/,
                use: [{
                  loader: 'style-loader', 
                }, {
                  loader: 'css-loader', 
                }, {
                  loader: 'postcss-loader', 
                  options: {
                    plugins: function () { 
                      return [
                        require('precss'),
                        require('autoprefixer')
                      ];
                    }
                  }
                }, {
                  loader: 'sass-loader' 
                }]
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // inject: false,
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new HtmlTemplatePlugin({
            inject: false,
            root: __dirname,
            template: "./src/index.html",
            appMountId: "root",
          }),
          new CopyWebpackPlugin({
            patterns: [{
              from: path.resolve(__dirname, "dist/"),
              to: path.resolve(__dirname, "docs/")
            }]
          })
    ]
}