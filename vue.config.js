
// vue-cli的配置文件
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://test.my-site.com",
      },
    },
  },
  publicPath: "./",
  outputDir:"dist",
  assetsDir:'public',
  productionSourceMap:false,//map
  configureWebpack: require("./webpack.config"),//webpack 配置
};
