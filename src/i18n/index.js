import zh from './package/zh'
import en from './package/en'
import I18n from './i18n'
import Vue from 'vue'
import store from '../store/index'
const i18n = new I18n({
  messages: {
    zh,
    en
  }
})
// eslint-disable-next-line
Vue.prototype.$t = (str, params) => {
  return i18n.$t(str, params)
}
// 组件库统一语言
window['z-ui'].Locale.use({
  lang: store.state.language,
  currency: '￥'
})
export default i18n
