const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  entry: "/src/index.ts",
  output: { path: path.resolve(__dirname, "dist"), filename: "bundle.js", clean: true },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "tsconfig.json"),
            },
          },
        ],
        exclude: /(node_modules)/,
      },
      {
        test: /\.pug?$/,
        use: [
          {
            loader: "pug-loader",
          },
        ],
      },
      {
        test: /\.scss?$/,
        use: ["style-loader", "css-loader", "resolve-url-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf|otf)$/i,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
};
