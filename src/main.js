import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js' // 注册路由
import store from './store/index.js' // 注册vuex
import plugin from './plugins/index' // 全局方法
import i18n from './i18n' // 多语言
import './styles/reset.less' // 重置样式
import './styles/base.less' // 基础样式
import './styles/flex.less' // flex样式
import './styles/theme.less' // 主题样式
import './utils/rem' // rem适配
import './utils/initTheme' // 初始化主题
Vue.config.productionTip = false
Vue.use(plugin)
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
