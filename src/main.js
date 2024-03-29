import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js' // 注册路由
import store from './store/index.js' // 注册vuex
import plugin from './plugins/index' // 全局方法
import i18n from './i18n' // 多语言
// import Vant from 'vant'
// import 'vant/lib/index.css'
import './styles/reset.less' // 重置样式
import './styles/base.less' // 基础样式
import './styles/flex.less' // flex样式
import './styles/theme.less' // 主题样式
import './utils/rem' // rem适配
import initTheme from './utils/initTheme' // 初始化主题
import './directives/index' // 注册全局指令
import Toast from './components/Toast/toast.js' // js调用components
import './interview/pub-sub.js' // 发布订阅模式
// Vue.use(Vant)
Vue.use(initTheme)
Vue.use(Toast)
const version = require('../package.json').version
window.version = version
Vue.config.productionTip = false
Vue.use(plugin)
// eslint-disable-next-line no-undef
const zui = 'z-ui'
Vue.use(zui)
// 根实例

export default new Vue({
  el: '#app',
  data() {
    return {
      name: 'alwa'
    }
  },
  router,
  store,
  i18n,
  render: h => h(App),
  mounted() {
    // 触发 renderAfterDocumentEvent
    document.dispatchEvent(new Event('render-event'))
  }
  // components: { App },
  // template: '<App />'
}).$mount('#app')
