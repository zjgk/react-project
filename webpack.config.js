const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
// 负责将html文档虚拟到根目录下
let htmlWebpackPlugin = new HtmlWebpackPlugin({
  // 虚拟的html文件名 index.html
  filename: "index.html",
  // 虚拟html的模板为 src下的index.html
  template: path.resolve(__dirname, "./src/index.html")
});

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "cheap-module-eval-source-map",
  output: {
    // 输出目录
    path: path.join(__dirname, "dist"),
    // 文件名称
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./dist", //本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    inline: true, //实时刷新
    port: 1208,
    // open: true, //自动打开浏览器,
    hot: true, //开启热更新
    // hotOnly: true //尽管html功能没有实现，也不让浏览器刷新
    proxy: {
      "/v4_0/*": {
        "target": "https://www.geetemp.com",
        "changeOrigin": true
      }
    }
  },
  resolve: {
    alias: {
      store: path.resolve(__dirname, "src/store"),
      utils: path.resolve(__dirname, "src/utils"),
      services: path.resolve(__dirname, "src/services"),
      components: path.resolve(__dirname, "src/components"),
      pages: path.resolve(__dirname, "src/pages"),
      assets: path.resolve(__dirname, "src/assets"),
    }
  },
  // 装载虚拟目录插件
  plugins: [
    htmlWebpackPlugin,
    new webpack.HotModuleReplacementPlugin(),//使用模块热更新插件
  ],
  module: {
    // 根据文件后缀匹配规则
    rules: [
      // 配置js/jsx语法解析
      { test: /\.js|jsx$/, use: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "postcss-loader",
          "sass-loader" // compiles Sass to CSS
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
        ]
      },
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx|mjs)$/,
          /\.(ts|tsx)$/,
          /\.(vue)$/,
          /\.(less)$/,
          /\.(re)$/,
          /\.(s?css|sass)$/,
          /\.json$/,
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/
        ],
        loader: require.resolve("file-loader"),
        options: {
          name: "static/media/[name].[hash:8].[ext]",
          emitFile: true
        }
      },
      // "url" loader works like "file" loader except that it embeds assets
      // smaller than specified limit in bytes as data URLs to avoid requests.
      // A missing `test` is equivalent to a match.
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve("url-loader"),
        options: {
          limit: 10000,
          name: "static/media/[name].[hash:8].[ext]",
          emitFile: true
        }
      },
    ]
  }
};
