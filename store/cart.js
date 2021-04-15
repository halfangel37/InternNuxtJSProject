/* cart.store.js */

const state = () => ({
  carts: []
});

const getters = {
  getCart(state) {
    return state.carts;
  },
  getQuantity(state) {
    return state.carts.reduce((total, cart) => {
      return total + cart.quantity;
    }, 0);
  },
  getPrice(state) {
    return state.carts.reduce((total, cart) => {
      return (total += cart.quantity * cart.price);
    }, 0);
  }
};

const mutations = {
  ADD_PRODUCT(state, product) {
    product["quantity"] = 1;
    state.carts.push(product);
  },

  DELETE_PRODUCT(state, id) {
    state.carts.splice(
      state.carts.findIndex(cart => cart.id === id),
      1
    );
  },

  INCREASE_PRODUCT(state, product) {
    state.carts
      .filter(cart => cart.id === product.id)
      .map(cart => cart.quantity++);
  },

  DECREASE_PRODUCT(state, product) {
    state.carts
      .filter(cart => cart.id === product.id)
      .map(cart => cart.quantity--);
  }
};

const actions = {
  addProduct({ commit, state }, product) {
    let checkItem = state.carts.some(cart => cart.id === product.id);
    if (checkItem) {
      commit("INCREASE_PRODUCT", product);
    } else {
      commit("ADD_PRODUCT", product);
    }
  },

  decreaseProduct({ commit, state }, product) {
    let quantity = state.carts.find(cart => cart.id === product.id).quantity;
    if (quantity > 1) {
      commit("DECREASE_PRODUCT", product);
    } else {
      commit("DELETE_PRODUCT", product.id);
    }
  },

  deleteProduct({ commit }, product) {
    commit("DELETE_PRODUCT", product.id);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
