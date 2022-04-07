const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: true,
  transpileDependencies: false,
  configureWebpack: {
    externals: {
      'vue-router': 'VueRouter'
    }
  }
})
