// states
const state = {
  slidemenuState: false,
  breadpath: '首页',
  tabsleft: 0,
  addBtnState: true
}

// getters
const getters = {
  getSlidemenuState: state => state.slidemenuState,
  getBreadPath: state => state.breadpath,
  getTabsLeft: state => state.tabsleft,
  getAddBtnState: state => state.addBtnState
}
// mutations
const mutations = {
  CLOSE_SLIDEMENU (state) {
    state.slidemenuState = false
  },
  OPEN_SLIDEMENU (state) {
    state.slidemenuState = true
  },
  UPDATE_BREADPATH (state, path) {
    state.breadpath = path
  },
  INCREAD_TABSLEFT (state, len) {
    state.tabsleft = state.tabsleft + len
  },
  DECREAD_TABSLEFT (state, len) {
    state.tabsleft = state.tabsleft - len
  },
  UPDATE_ADDBTNSTATE (state, s) {
    state.addBtnState = s
  }
}
// actions
const actions = {
  closeSlidemenu ({commit, state}) {
    commit('CLOSE_SLIDEMENU')
  },
  openSlidemenu ({commit, state}) {
    commit('OPEN_SLIDEMENU')
  },
  updateBreadpath ({commit, state}, path) {
    commit('UPDATE_BREADPATH', path)
  },
  increadTabsleft ({commit, state}, len) {
    commit('INCREAD_TABSLEFT', len)
  },
  decreadTabsleft ({commit, state}, len) {
    commit('DECREAD_TABSLEFT', len)
  },
  updateAddbtnstate ({commit, state}, s) {
    commit('UPDATE_ADDBTNSTATE', s)
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
