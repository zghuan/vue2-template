export default {
  install (Vue, options) {
    // 设置标题
    Vue.prototype.$setTitle = function (text) {
      document.title = text || ''
    }
  }
}
