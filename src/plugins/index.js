import { customizeConsole } from '@/utils'
export default {
  install (Vue, options) {
    const requireJs = require.context('.', false, /\.js$/)
    requireJs.keys().forEach(keys => {
      if (keys !== './index.js') {
        const installName = keys.replace(/^\.\//, '').replace(/\.\w+$/, '')
        const installFile = requireJs(keys).default
        Vue.prototype[installName] = installFile
      }
    })
    // 设置标题
    Vue.prototype.$setTitle = function (text) {
      document.title = text || ''
    }
    // 自定义打印
    Vue.prototype.$log = customizeConsole
  }
}
