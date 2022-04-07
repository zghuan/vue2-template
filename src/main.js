import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js' // 注册路由
import plugin from './plugins/index' // 全局方法
import './styles/reset.less' // 重置样式
import './styles/flex.less' // flex样式
import './utils/rem' // rem自定义
Vue.config.productionTip = false
Vue.use(plugin)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
