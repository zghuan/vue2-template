module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0',
    port: 80
  },
  configureWebpack: {
    name: '正在进入...',
    externals: {
      vue: 'Vue',
      vuex: 'Vuex',
      axios: 'axios',
      'vue-router': 'VueRouter'
    },
    module: {
      rules: [{
        test: /\.md$/,
        use: [
          'babel-loader',
          './loader/md-loader.js'
        ]
      }]
    }
  },
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer('terser').tap((args) => {
        args[0].exclude = ['globalConfig'] // 配置文件不被压缩
        const compress = args[0].terserOptions.compress
        compress.drop_debugger = true
        compress.pure_funcs = [
          'console.log' // 仅指定log清除
        ]
        return args
      })
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            hack: 'true; @import "/src/styles/vantTheme.less";'
          }
        }
      }
    }
  }
}
