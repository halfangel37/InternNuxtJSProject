import Vue from "vue";
import Vuex from "vuex";
import cart from "./cart";

Vue.use(Vuex);

new Vuex.Store({
  state: () => ({}),
  modules: {
    cart
  }
});
