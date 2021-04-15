<template>
  <div class="checkout-cart">
    <div class="checkout-cart__image">
      <img :src="product.image" width="75px" height="75px" />
    </div>
    <GsCartHomeItem
      class="checkout-cart__item"
      :product="product"
      @remove="remove()"
      @increase="increase()"
      @decrease="decrease()"
    />
  </div>
</template> 

<script>
export default {
  name: "GsCartCheckOutItem",

  props: {
    product: {
      type: Object,
      default: () => {},
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
.checkout-cart {
  display: block;

  &__image {
    float: left;
    width: auto;
    padding-top: 5px;
  }
  &__item {
    padding: 30px 0 35px 10px !important;
    border-bottom: none !important;
  }
}
</style>