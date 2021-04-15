<template>
  <div class="gs-cart-home-item">
    <div class="gs-cart-home-item__name">
      <ElementsGsTypography sub-title bold>{{ product.name }}</ElementsGsTypography>
    </div>
    <div class="gs-cart-home-item__quantity">
      <div class="gs-cart-home-item__increase">
        <ElementsGsButton @click.native="increase" class="gs-cart-home-item__increase--button">
          <gs-icon icon="plus" />
        </ElementsGsButton>
      </div>
      <div class="gs-cart-home-item__content">
        <ElementsGsTypography sub-title>{{ product.quantity }}</ElementsGsTypography>
      </div>
      <div class="gs-cart-home-item__decrease">
        <ElementsGsButton @click.native="decrease" class="gs-cart-home-item__decrease--button">
          <gs-icon icon="minus" />
        </ElementsGsButton>
      </div>
    </div>
    <div class="gs-cart-home-item__price">
      <div class="gs-cart-home-item__left">
        <ElementsGsTypography sub-title>{{ totalPriceOfProduct | currency("VND") }}</ElementsGsTypography>
      </div>
      <div class="gs-cart-home-item__right">
        <gs-icon @click="remove" icon="trash" class="gs-cart-home-item__right--icon" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "GsCartHomeItem",
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapState({
      carts: (state) => state.cart.carts,
    }),
    quantity() {
      let checkItem = this.$helpers.isExistedInCart(
        this.product.id,
        this.carts
      );
      return checkItem
        ? this.$helpers.findProductInCart(this.product.id, this.carts).quantity
        : 0;
    },
    totalPriceOfProduct() {
      return this.$helpers.calculatePriceOfProduct(
        this.product.quantity,
        this.product.price
      );
    },
  },
  methods: {
    increase() {
      this.$emit("increase", this.product);
    },
    decrease() {
      this.$emit("decrease", this.product);
    },
    remove() {
      this.$emit("remove", this.product);
    },
  },
};
</script>

<style lang="scss" scoped>
.gs-cart-home-item {
  display: flex;
  align-items: flex-start;
  height: auto;
  padding: 14px;
  border-bottom: 1px solid $mineShaft;

  &__name {
    width: 30%;
  }

  &__quantity {
    width: 40%;
    display: flex;
    align-items: flex-start;
  }

  &__increase {
    width: 28%;
    float: left;
    text-align: right;
    margin-right: 2%;

    &--button {
      padding: 0px 4px !important;
      margin: 0 !important;
      height: 20px;
    }
  }

  &__content {
    width: 40%;
    float: left;
    text-align: center;
  }

  &__decrease {
    width: 28%;
    float: left;
    text-align: left;
    margin-left: 2%;
    align-items: flex-end;

    &--button {
      padding: 0px 4px !important;
      margin: 0 !important;
      height: 20px;
    }
  }

  &__price {
    width: 30%;
    display: flex;
    align-items: flex-start;
  }

  &__left {
    width: 68%;
    float: left;
    text-align: right;
    margin-right: 2%;
  }

  &__right {
    width: 28%;
    float: left;
    text-align: left;
    margin-left: 2%;
    align-items: flex-end;

    &--icon {
      padding: 0px 4px !important;
      margin: 0 !important;
      height: 20px;
      color: $frenchRose;
      cursor: pointer;
    }
  }
}
</style>
