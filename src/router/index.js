import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: '登录',
      component: () => import(/* webpackChunkName: "login" */ '../pages/login.vue')
    },
    {
      path: '/home',
      name: '首页',
      component: () => import(/* webpackChunkName: "home" */ '../pages/home.vue')
    },
    {
      path: '/layout',
      name: '布局',
      component: () => import(/* webpackChunkName: "home" */ '../pages/layout.vue')
    }
  ]
})
