import { createStore } from 'vuex';
import cart from './cart';
import auth from './auth';
import product from './product';

const store = createStore({
  namespaced: true,
  state: {
    isLoadingIn: false
  },
  mutations: {
    SET_LOADING(state, isLoadingIn) {
      state.isLoadingIn = isLoadingIn;
    }
  },
  actions: {},
  getters: {
    getIsLoading(state) {
      return state.isLoadingIn
    }
  },
  modules: {
    cart,
    auth,
    product
  }
});

export default store;
