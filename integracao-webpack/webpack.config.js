const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/main.ts",
  output: {
    filename: "app.min.js",
    path: path.join(__dirname, "dist")
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: false,
    port: 9000
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public" }
      ]
    })
  ],
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: "ts-loader",
      exclude: /node_modules/
    }]
  }
}