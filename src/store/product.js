import router from '@/router';
import apiClient from '@/services/api';
import axios from 'axios'

const state = {
    products: [],
}

const token = axios.defaults.headers.common['Authorization'] || '';

const mutations = {
    // List Product
    SET_PROUCTS(state, products) {
        state.products = products;
    },
    UPDATE_PRODUCT_LIST(state, newProducts) {
        state.products = newProducts;
    },
    REMOVE_PRODUCT(state, productId) {
        state.products.items = state.products.items.filter((item) => item.id !== productId);
    },
    ADD_PRODUCT(state, product) {
        state.products.items.push(product);
    }
}

const actions = {
    async fetchProducts({ commit }) {
        try {
            const response = await axios.get(apiClient.defaults.baseUrlUser + '?page=1&size=50', token); // Thay thế bằng URL API của bạn
            const products = response.data;
            commit('SET_PROUCTS', products); // Commit mutation để cập nhật state
        } catch (error) {
            console.error('Lỗi khi lấy danh sách sản phẩm:', error);
        }
    },

    async removeProduct({ commit }, { producId }) {

        try {
            commit('SET_LOADING', true);
            const response = await axios.delete(apiClient.defaults.baseUrlUser + `/todos/${producId}`, token); // Thay thế bằng URL API của bạn
            if (response.status === 200) {
                commit('REMOVE_PRODUCT', producId);
                commit('SET_LOADING', false);
            }
        } catch (error) {
            console.error('Lỗi khi lấy danh sách sản phẩm:', error);
        }
    },

    async addProduct({ commit }, data) {
        try {
            commit('SET_LOADING', true);
            const response = await axios.post(apiClient.defaults.baseUrlUser + `/todos/`, data); // Thay thế bằng URL API của bạn
            const dataNew = response.data;
            commit('ADD_PRODUCT', dataNew);
            commit('SET_LOADING', false);
            router.replace('shop-list');

        } catch (error) {
            commit('SET_LOADING', false);
            console.error('Error logging in:', error);
        }
    },
}

const getters = {
    listProducts(state) {
        return state.products
    },
    isLoadingIn(state) {
        return state.isLoadingIn;
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}