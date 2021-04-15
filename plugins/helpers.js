import Vue from "vue";
const helpers = {
  /**
   * Check product in cart
   *
   * @param {string} arg1 Id of product
   * @param {array} arg2 Array of products
   * @public
   */
  isExistedInCart(arg1, arg2) {
    return arg2.some(arg => arg.id === arg1);
  },

  /**
   * Find product in cart
   *
   * @param {string} arg1 Id of product
   * @param {array} arg2 Array of products
   * @public
   */
  findProductInCart(arg1, arg2) {
    return arg2.find(arg => arg.id === arg1);
  },

  /**
   * Calculate price of product
   *
   * @param {number} arg1 Quantity of product
   * @param {number} arg2 Price of product
   * @public
   */
  calculatePriceOfProduct(arg1, arg2) {
    return arg1 * arg2;
  }
};

Vue.use({
  install() {
    Vue.helpers = helpers;
    Vue.prototype.$helpers = helpers;
  }
});
