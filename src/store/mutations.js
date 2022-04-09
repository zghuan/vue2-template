import * as types from './mutation-types'
const mutations = {
  [types.SET_THEMECOLOR] (state, themecolor) {
    state.themeColor = themecolor
    sessionStorage.setItem('themeColor', themecolor)
    document.body.style.setProperty('--themeColor', themecolor)
  },
  [types.SET_LANG] (state, lang) {
    state.lang = lang
    sessionStorage.setItem('lang', lang)
  }
}
export default mutations
