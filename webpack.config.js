const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, { mode }) => ({
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: mode === "development" ? "bundle.js" : "[name].[hash].js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader:
              // fallback to style-loader in development
              mode === "development"
                ? "style-loader"
                : MiniCssExtractPlugin.loader
          },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/img",
              name: "[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.woff$|\.woff2?$|\.ttf$|\.eot$|\.otf$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/fonts",
              name: "[path][name].[ext]"
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    stats: "minimal"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico"
    }),
    new MiniCssExtractPlugin()
  ]
});
