import Vue from 'vue'
import VueRouter from 'vue-router'
import customRoutes from './customRoutes.js'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  if (process.env.NODE_ENV !== 'production') {
    return originalPush.call(this, location).catch(error => error)
  } else {
    return originalPush.call(this, location)
  }
}
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
    },
    {
      path: '/topics',
      name: '发布大厅',
      component: () => import(/* webpackChunkName: "topics" */ '../pages/topics.vue')
    },
    {
      path: '/list',
      name: '产品布局生成器',
      component: () => import(/* webpackChunkName: "list" */ '../pages/list.vue')
    },
    ...customRoutes
  ]
})
