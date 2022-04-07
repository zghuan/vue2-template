import zh from './package/zh'
import en from './package/en'
import store from '../store'
import I18n from './i18n'
const i18n = new I18n({
  locale: store.state.lang || (navigator.language || navigator.userLanguage).slice(0, 2) || 'zh',
  messages: {
    zh,
    en
  }
})
// eslint-disable-next-line
Vue.prototype.$t = (str, params) => {
  return i18n.$t(str, params)
}
export default i18n
