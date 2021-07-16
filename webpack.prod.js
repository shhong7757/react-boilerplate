const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const { ESBuildMinifyPlugin } = require("esbuild-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React App",
      template: "public/index.html",
    }),
  ],
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: "es2015", // Syntax to compile to (see options below for possible values)
        css: true, // Apply minification to CSS assets
      }),
    ],
  },
});
