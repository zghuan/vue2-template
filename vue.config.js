const FileListPlugin = require('./webpackPlugin/fileList.js')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const PrerenderSPAPlugin = require('@dreysolano/prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const CONFIG = require('./public/globalConfig.js')
console.log('正在读取全局配置文件...', CONFIG)
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue2/' : '/',
  lintOnSave: process.env.NODE_ENV !== 'production',
  outputDir: 'vue2',
  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0',
    port: 80
  },
  runtimeCompiler: true, // 运行时+编译器
  configureWebpack: (config) => {
    config.name = '正在进入...'
    config.externals = {
      vue: 'Vue',
      // vuex: 'Vuex',
      zui: 'z-ui',
      axios: 'axios'
      // 'vue-router': 'VueRouter'
    }
    config.module.rules.push({
      test: /\.md$/,
      use: ['./loader/md-loader.js']
    })
    config.plugins.push(
      new FileListPlugin({
        filename: 'alwa.md',
        exclude: ['html'] // 排除记录的文件
      })
      // new CleanWebpackPlugin()
    )
    if (process.env.MODE === 'pre') {
      config.plugins.push(
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: ['/home', '/layout'], // 你需要预渲染的路由
          renderer: new Renderer({
            inject: {
              _m: 'prerender'
            },
            // 渲染时显示浏览器窗口，调试时有用
            headless: false,
            // 等待触发目标时间后，开始预渲染
            renderAfterDocumentEvent: 'render-event'
          })
        })
      )
    }
  },
  chainWebpack: (config) => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    if (process.env.NODE_ENV === 'production') {
      // config.plugin('webpack-bundle-analyzer')
      //   .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
      config.optimization.minimizer('terser').tap((args) => {
        args[0].exclude = ['globalConfig'] // 配置文件不被压缩
        const compress = args[0].terserOptions.compress
        // compress.drop_debugger = true
        compress.pure_funcs = [
          'console.log' // 仅指定log清除
        ]
        return args
      })
    }
    // 预渲染是https，加载不了http阻塞
    if (process.env.MODE !== 'pre') {
      config.plugin('html').tap((args) => {
        args[0].cdn = {
          css: `${CONFIG.zuiCdn.css}?v=${new Date().getTime()}`,
          js: `${CONFIG.zuiCdn.js}?v=${new Date().getTime()}`
        }
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
