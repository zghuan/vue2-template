import store from '../store'
export default {
  install (Vue, options) {
    const style = window.sessionStorage.getItem('themeColor')
    if (style) {
      document.body.style.setProperty('--themeColor', style)
    } else {
      document.body.style.setProperty('--themeColor', store.state.themeColor)
    }
  }
}
