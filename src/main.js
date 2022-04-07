import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js' // 注册路由
import store from './store/index.js' // 注册vuex
import plugin from './plugins/index' // 全局方法
import './utils/initTheme' // 初始化主题
import './styles/reset.less' // 重置样式
import './styles/base.less' // 基础样式
import './styles/flex.less' // flex样式
import './styles/theme.less' // flex样式
import './utils/rem' // rem适配
Vue.config.productionTip = false
Vue.use(plugin)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
