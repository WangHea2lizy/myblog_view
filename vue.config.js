// vue.config.js
module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    port: 8080,
    proxy: {
      "/simu": {
        target: "http://localhost:3001",
        pathRewrite: {
          '^/simu': '/'
        }
      }
    }
  }
}
