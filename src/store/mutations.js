import * as types from './mutation-types'
const mutations = {
  [types.SET_THEMECOLOR] (state, themecolor) {
    state.themeColor = themecolor
    sessionStorage.setItem('themeColor', themecolor)
    document.body.style.setProperty('--themeColor', themecolor)
  }
}
export default mutations
