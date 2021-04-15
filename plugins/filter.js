import Vue from "vue";
/**
 * * Currency conversion filter
 *
 * @param {number} arg1 Number of price
 * @param {string} arg2 Currency of price
 * @public
 */

export function currency(arg1, arg2) {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: arg2
  }).format(arg1);
}

const filters = { currency };
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
