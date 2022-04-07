import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import state from './state'
// eslint-disable-next-line
Vue.use(Vuex)
// eslint-disable-next-line
const store = new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
export default store
