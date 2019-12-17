const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

const env = ["prod", "test"].includes(process.env.NODE_ENV);

module.exports = {
  // 项目部署的基础路径
  publicPath: env ? "./" : "/",
  // 将构建好的文件输出到哪里
  outputDir: "dist",
  // 放置静态资源的地方 (js/css/img/font/...)
  assetsDir: "static",
  // 用于多页配置，默认是 undefined
  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  lintOnSave: false,
  runtimeCompiler: true, //是否使用包含运行时编译器的 Vue 构建版本
  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,
  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/webpack.md
  chainWebpack: config => {
    config.plugins.delete("preload"); // TODO: need test
    config.plugins.delete("prefetch"); // TODO: need test
    // 添加别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("static", resolve("src/static"));
  },
  // CSS 相关选项
  css: {
    // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
    extract: true,
    // 是否开启 CSS source map？
    sourceMap: false,
    // 为预处理器的 loader 传递自定义选项。比如传递给
    // sass-loader 时，使用 `{ sass: { ... } }`。
    loaderOptions: {}
  },
  // 在多核机器下会默认开启。
  parallel: require("os").cpus().length > 1,
  // 配置 webpack-dev-server 行为。
  devServer: {
    open: true,
    host: "0.0.0.0",
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null // string | Object
  },
  // 三方插件的选项
  pluginOptions: {}
};
