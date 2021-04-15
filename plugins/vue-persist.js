import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  
  storage: window.localStorage
  // reducer: (state) => ({ cart: state.cart, quantity: state.cart.length })
});
