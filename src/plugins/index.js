export default {
  install (Vue, options) {
    Vue.prototype.$setTitle = function (text) {
      document.title = text || ''
    }
  }
}
