import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cart, // cart: cart

  },
  state: {
    list: [1, 2, 3, 4]
  },
  getters: {
    modelData: state => state.list
  }
})

export default store