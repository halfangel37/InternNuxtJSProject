import Vue from "vue";
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

library.add(
  faShoppingCart,
  faPlus,
  faMinus,
  faAngleDown,
  faAngleUp,
  faTrash,
  faAngleDoubleLeft
);
Vue.component("gs-icon", FontAwesomeIcon);
