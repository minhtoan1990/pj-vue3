const state = {
  cart: [],
}

const mutations = {
  ADD_TO_CART(state, product) {
    const item = state.cart.find((item) => item.id === product.id);
    if (item) {
      item.quantity += 1;
      console.log('id: ', product);
    } else {
      console.log(product);
      state.cart.push({ ...product, quantity: product.quantity });
    }
  },
  REMOVE_FROM_CART(state, productId) {
    state.cart = state.cart.filter((item) => item.id !== productId);
  },
  UPDATE_CART_ITEM(state, { productId, quantity }) {
    const item = state.cart.find((item) => item.id === productId);
    if (item) {
      item.quantity = quantity;
    }
  },
}

const actions = {
  // cartItem
  addToCart({ commit }, product) {
    commit('ADD_TO_CART', product);
  },
  removeFromCart({ commit }, productId) {
    commit('REMOVE_FROM_CART', productId);
  },
  updateCartItem({ commit }, { productId, quantity }) {
    commit('UPDATE_CART_ITEM', { productId, quantity });
  },
}

const getters = {
  cartItems(state) {
    return state.cart;
  },
  cartTotal(state) {
    // return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return state.cart.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0);
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}