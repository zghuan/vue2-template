const routes = [
  {
    path: '/alwa',
    name: 'alwa',
    component: () => import(/* webpackChunkName: "custom" */ '../custom/alwa/alwa.vue')
  }
]
export default routes
