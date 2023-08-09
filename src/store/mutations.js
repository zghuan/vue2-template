import * as types from './mutation-types'
const mutations = {
  [types.SET_THEMECOLOR] (state, themecolor) {
    state.themeColor = themecolor
    localStorage.setItem('themeColor', themecolor)
    document.body.style.setProperty('--themeColor', themecolor)
  },
  [types.SET_LANG] (state, lang) {
    state.language = lang
    localStorage.setItem('language', lang)
  }
}
export default mutations
