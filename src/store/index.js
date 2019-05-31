import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '长沙'
  },
  mutations: {
    changeHotCity (state, city) {
      state.city = city
    }
  }
})
