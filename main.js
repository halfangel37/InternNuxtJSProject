import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./elements";
import Vuelidate from "vuelidate";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faPlus,
  faMinus,
  faAngleDown,
  faAngleUp,
  faTrash,
  faAngleDoubleLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Scrollspy from "vue2-scrollspy";
import helpers from "@/helpers";
import store from "@/store";
import Filters from "@/filters";
import VueScrollactive from "vue-scrollactive";

Vue.use(VueScrollactive);

const plugin = {
  install() {
    Vue.helpers = helpers;
    Vue.prototype.$helpers = helpers;
  }
};

Vue.use(plugin);
Vue.use(Scrollspy);
library.add(
  faShoppingCart,
  faPlus,
  faMinus,
  faAngleDown,
  faAngleUp,
  faTrash,
  faAngleDoubleLeft
);
Vue.use(Vuelidate);
Vue.component("gs-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
  component: { Filters }
}).$mount("#app");
