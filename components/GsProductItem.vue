<template>
  <div class="gs-card">
    <div class="gs-card__media">
      <div class="gs-card__media-image">
        <img :src="product.image" :alt="product.name" width="75px" height="75px" />
      </div>
      <div class="gs-card__media-body">
        <ElementsGsTypography title bold class="gs-card__media-title">{{ product.name }}</ElementsGsTypography>
        <ElementsGsTypography sub-title bold class="gs-card__media-subtitle">{{ product.description }}</ElementsGsTypography>
        <div class="gs-card__media-product">
          <gs-icon icon="shopping-cart" class="gs-card__media-product--icon" />
          <ElementsGsTypography class="gs-card__media-product--quantity">{{ quantity }}</ElementsGsTypography>
          <ElementsGsButton @click.native="addToCart" class="gs-card__media-product--button">
            <gs-icon icon="plus" class="gs-card__media-product--plus" />
          </ElementsGsButton>
        </div>
        <ElementsGsTypography
          bold
          class="gs-card__media-product--price"
        >{{ product.price | currency("VND") }}</ElementsGsTypography>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "GsProductItem",
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    ...mapState({
      carts: state => state.cart.carts
    }),
    quantity() {
      let checkItem = this.$helpers.isExistedInCart(
        this.product.id,
        this.carts
      );
      return checkItem
        ? this.$helpers.findProductInCart(this.product.id, this.carts).quantity
        : 0;
    }
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product);
    }
  }
};
</script>

<style lang="scss" scoped>

.gs-card {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: $white;
  border: 1px solid $alto;
  overflow: auto;

  &:after {
    content: "";
    display: table;
    clear: both;
  }

  &__media-image {
    width: auto;
    float: left;
  }

  &__media-body {
    margin-left: 10px;
    width: calc(100% - 100px);
    float: left;

    &:after {
      content: "";
      display: table;
      clear: both;
    }
  }

  &__media-title {
    float: left;
    width: 100%;
  }

  &__media-subtitle {
    float: left;
    width: calc(100% - 75px);
    color: $boulder;
    font-weight: 500;
  }

  &__media-product {
    float: left;

    &:after {
      content: "";
      display: table;
      clear: both;
    }
  }

  &__media-product--icon {
    text-align: center;
    float: left;
    width: auto;
  }

  &__media-product--quantity {
    text-align: right;
    padding: 0px 10px 0px 2px;
    float: left;
    width: auto;
  }

  &__media-product--button {
    text-align: right;
    padding: 0px 4px !important;
    margin: 0 !important;
    height: 20px;
    float: left;
    width: auto;
    position: relative;
  }

  &__media-product--plus {
    top: 0px;
    right: 0px;
  }

  &__media-product--price {
    float: left;
    width: 100%;
    padding-top: 10px;
  }
}
</style>
