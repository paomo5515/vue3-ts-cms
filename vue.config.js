const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components"
      }
    }
  },
  devServer: {
    port: 6060,
    host: "127.0.0.1",
    open: true,
    historyApiFallback: true
  }
})
