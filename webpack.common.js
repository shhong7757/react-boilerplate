const path = require("path");

module.exports = {
  entry: ["react-hot-loader/patch", "./src/index.tsx"],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "esbuild-loader",
        options: {
          loader: "jsx", // Remove this if you're not using JSX
          target: "es2015", // Syntax to compile to (see options below for possible values)
        },
      },
      {
        test: /\.tsx?$/,
        loader: "esbuild-loader",
        options: {
          loader: "tsx", // Or 'ts' if you don't need tsx
          target: "es2015",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"],
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
};
