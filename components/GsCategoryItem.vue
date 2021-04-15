<template>
  <div class="gs-category">
    <div class="gs-category__title" :id="categoryId">
      <ElementsGsTypography title italic>{{ categoryName }}</ElementsGsTypography>
    </div>
    <div class="gs-category__product">
      <GsProductItem
        v-for="(product, index) in products"
        :key="index"
        :product="product"
        @addToCart="addToCart(product)"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "GsCategoryItem",

  props: {
    categoryName: {
      type: String,
      default: "",
    },
    products: {
      type: Array,
      default: () => [],
    },
    categoryId: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapState({
      carts: (state) => state.cart.carts,
    }),
  },
  methods: {
    ...mapActions({
      addProduct: "cart/addProduct",
    }),
    addToCart(value) {
      this.addProduct(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.gs-category {
  position: relative;
  height: auto;
  margin-bottom: 10px;

  &__title {
    padding: 0.75rem 0rem;
  }

  &__product {
    -webkit-box-shadow: 2px 2px 3px 0px rgba(50, 50, 50, 0.5);
    -moz-box-shadow: 2px 2px 3px 0px rgba(50, 50, 50, 0.5);
    box-shadow: 2px 2px 3px 0px rgba(50, 50, 50, 0.5);
  }
}
</style>
