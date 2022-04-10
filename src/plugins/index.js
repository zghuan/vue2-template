import { customizeConsole } from '@/utils'
export default {
  install (Vue, options) {
    // 设置标题
    Vue.prototype.$setTitle = function (text) {
      document.title = text || ''
    }
    // 自定义打印
    Vue.prototype.$log = customizeConsole
  }
}
