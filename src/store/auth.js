import axios from 'axios'
import apiClient from '@/services/api';
import router from "@/router";

const state = {
  isLoggedIn: false,
  user: [],
  userError: [],
  userAdmin: []
}

const mutations = {
  SET_USER_ADMIN(state, userAdmin) {
    state.userAdmin = userAdmin;
  },
  REMOVE_USER(state, userId) {
    state.userAdmin.items = state.userAdmin.items.filter((item) => item.id !== userId);
  },
  // Login User
  SET_USER(state, user) {
    state.user = user;
  },
  SET_LOGIN_STATUS(state, isLoggedIn) {
    state.isLoggedIn = isLoggedIn;
  },
  SET_USER_ERROR(state, userError) {
    state.userError = userError;
  }  
}

const actions = {

  async register({ commit }, data) {
    try {
      commit('SET_LOADING', true);
      const response = await axios.post('https://todo-app-vqdy.onrender.com/auth/', data);
      commit('SET_USER_ERROR', '');
      commit('SET_LOADING', false);
    } catch (err) {
      commit('SET_LOADING', false);
      const userError = err.response.data.detail;
      commit('SET_USER_ERROR', userError);
      console.log(err.response.data.detail);
    }
  },

  async getUserAdmin({commit}) {
    if(state.isLoggedIn) {
      try {

        const response = await axios.get(apiClient.defaults.baseUrlUser + '/admin/users');
        console.log(response);
        commit('SET_USER_ADMIN', response.data);
  
      } catch (err) {
        console.log(err);
      }
    } else {
      router.push('/login');
    }
   
  },

  async removeUserAdmin({commit}, userId) {
    try{
      commit('SET_LOADING', true);
      const response = await axios.delete(apiClient.defaults.baseUrlUser + `/admin/${userId.id}`);
        if (response.status === 200) {
            commit('REMOVE_USER', userId.id);
            commit('SET_LOADING', false);
        }
    } catch(error) {
      commit('SET_LOADING', false);
      console.error('Error logging in:', error);
    }
  },
  //  Login user

  async login({ commit, context, dispatch }, loginData) {
    try {
      commit('SET_LOADING', true);
      // // Send login data to API
      const response = await axios.post('https://todo-app-vqdy.onrender.com/auth/login', loginData);

      const token = response.data.access_token;
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      commit('SET_LOGIN_STATUS', true);
      const dataUser = await axios.get(apiClient.defaults.baseUrlUser + '/users/me');
      commit('SET_USER', dataUser.data);
      commit('SET_LOADING', false);
      if (dataUser.data.role === 'user') {
        router.push('/user/profile');
      } else {
        router.push('/user/admin');
      }


    } catch (error) {
      console.error('Error logging in:', error);
    }
  },

  async logout({ commit }) {
    // Update Vuex state to clear user info and login status
    localStorage.removeItem('token');
    commit('SET_USER', null);
    commit('SET_LOGIN_STATUS', false);
    router.push('/');

  },

  async getUser({ commit }) {
    try {
      const token = axios.defaults.headers.common['Authorization'];
      const dataUser = await axios.get(apiClient.defaults.baseUrlUser + '/users/me', 'Bearer ' + `Bearer ${token}`);
      commit('SET_USER', dataUser.data);
      commit('SET_LOGIN_STATUS', true);
    } catch (error) {
      console.log(error);
    }

  },

  async checkAuthentication({ commit }) {
    // Check if user is logged in based on your authentication logic (e.g., token storage)
    if (state.isLoggedIn) {
      const dataUser = await axios.get(apiClient.defaults.baseUrlUser + '/users/me');
      console.log(dataUser);
      commit('SET_USER', dataUser.data);
      commit('SET_LOGIN_STATUS', true);
    } else {
      commit('SET_USER', []);
      commit('SET_LOGIN_STATUS', false);
    }
    // If logged in, fetch user info from API and update Vuex state
    // If not logged in, update Vuex state accordingly
  },
}

const getters = {
  profileUser(state) {
    return state.user;
  },
  userLogin(state) {
    return state.isLoggedIn;
  },
  userError(state) {
    return state.userError;
  },
  userAdmin(state) {
    return state.userAdmin;
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}