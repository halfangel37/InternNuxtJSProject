
<template>
  <div style="background-color: #DBDBDB">
    <div id="is-overlay" :style="{ display: isOpen ? 'block' : 'none' }"></div>
    <GsHeader :count="totalQuantityCart" @scroll="handleScroll" :active="active" />
    <div class="gs-main">
      <scrollactive
        class="gs-main__category"
        ref="category"
        :style="{ top: category() }"
        :offset="110"
        :duration="800"
        active-class="gs-category-link--active"
        highlight-first-item
      >
        <GsCategoryMenu
          v-for="(category, index) in api.default.data"
          :key="index"
          :categoryName="category.category"
          :categoryId="category.id"
        />
      </scrollactive>
      <div class="gs-main__product">
        <ElementsGsInput placeholder="Tìm kiếm" />
        <div>
          <GsCategoryItem
            v-for="(category, index) in api.default.data"
            :key="index"
            :categoryName="category.category"
            :products="category.products"
            :categoryId="category.id"
          />
        </div>
      </div>
      <div class="gs-main__checkout">
        <div class="gs-main__order">
          <nuxt-link class="gs-main__order--a" nuxt to="checkout">
            <ElementsGsButton class="gs-main__order--button" block>
              <ElementsGsTypography block>Tiến hành đặt hàng</ElementsGsTypography>
            </ElementsGsButton>
          </nuxt-link>
        </div>
        <div class="gs-main__cart">
          <GsCartHomeItem
            v-for="(cart, index) in carts"
            :key="index"
            :product="cart"
            @remove="remove(cart)"
            @increase="increase(cart)"
            @decrease="decrease(cart)"
          />
        </div>
        <div class="gs-main__total">
          <div class="gs-main__content">
            <div class="gs-main__content--p-left">
              <ElementsGsTypography sub-title bold>Tạm tính</ElementsGsTypography>
            </div>
            <div class="gs-main__content--p-right">
              <ElementsGsTypography sub-title>{{ totalPriceCart | currency("VND") }}</ElementsGsTypography>
            </div>
          </div>
          <div class="gs-main__content">
            <div class="gs-main__content--p-left">
              <ElementsGsTypography sub-title bold>VAT 0%</ElementsGsTypography>
            </div>
            <div class="gs-main__content--p-right">
              <ElementsGsTypography sub-title>{{ 0 | currency("VND") }}</ElementsGsTypography>
            </div>
          </div>
          <div class="gs-main__content">
            <div class="gs-main__content--p-left">
              <ElementsGsTypography sub-title bold>Tổng cộng</ElementsGsTypography>
            </div>
            <div class="gs-main__content--p-right">
              <ElementsGsTypography sub-title>{{ totalPriceCart | currency("VND") }}</ElementsGsTypography>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gs-checkout-mobile">
      <div class="gs-checkout-mobile__header">
        <div class="gs-checkout-mobile__quantity">
          <ElementsGsTypography
            title
            bold
            center
            class="gs-checkout-mobile__quantity--p"
          >{{ totalQuantityCart }} Món</ElementsGsTypography>
        </div>
        <div class="gs-checkout-mobile__cart">
          <ElementsGsButton @click.native="toggle" class="gs-checkout-mobile__cart--button">
            <ElementsGsTypography title bold>Xem giỏ hàng</ElementsGsTypography>
          </ElementsGsButton>
        </div>
        <div class="gs-checkout-mobile__price">
          <ElementsGsTypography
            title
            bold
            center
            class="gs-checkout-mobile__price--p"
          >{{ totalPriceCart | currency("VND") }}</ElementsGsTypography>
        </div>
      </div>
      <div class="gs-checkout-mobile__body" :class="accordionClasses">
        <div class="gs-main__order">
          <nuxt-link nuxt class="gs-main__order--a" :to="{ name: 'checkout' }">
            <ElementsGsButton class="gs-main__order--button" block>
              <ElementsGsTypography block>Tiến hành đặt hàng</ElementsGsTypography>
            </ElementsGsButton>
          </nuxt-link>
        </div>
        <div class="gs-main__cart">
          <GsCartHomeItem
            v-for="(cart, index) in carts"
            :key="index"
            :product="cart"
            @remove="remove(cart)"
            @increase="increase(cart)"
            @decrease="decrease(cart)"
          />
        </div>
        <div class="gs-main__total">
          <div class="gs-main__content">
            <div class="gs-main__content--p-left">
              <ElementsGsTypography sub-title bold>Tạm tính</ElementsGsTypography>
            </div>
            <div class="gs-main__content--p-right">
              <ElementsGsTypography sub-title>{{ totalPriceCart | currency("VND") }}</ElementsGsTypography>
            </div>
          </div>
          <div class="gs-main__content">
            <div class="gs-main__content--p-left">
              <ElementsGsTypography sub-title bold>VAT 0%</ElementsGsTypography>
            </div>
            <div class="gs-main__content--p-right">
              <ElementsGsTypography sub-title>{{ 0 | currency("VND") }}</ElementsGsTypography>
            </div>
          </div>
          <div class="gs-main__content">
            <div class="gs-main__content--p-left">
              <ElementsGsTypography sub-title bold>Tổng cộng</ElementsGsTypography>
            </div>
            <div class="gs-main__content--p-right">
              <ElementsGsTypography sub-title>{{ totalPriceCart | currency("VND") }}</ElementsGsTypography>
            </div>
          </div>
        </div>
      </div>
    </div>
    <GsFooter />
  </div>
</template>

<script>
import * as api from "@/assets/data";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "GsHome",
  data() {
    return {
      activeItem: "01",
      api: api,
      isOpen: false,
      active: false,
    };
  },
  computed: {
    cartQuantity() {
      return this.carts.length;
    },
    accordionClasses() {
      return {
        "gs-checkout-mobile__body--is-closed": !this.isOpen,
      };
    },
    ...mapState({
      carts: (state) => state.cart.carts,
    }),
    ...mapGetters({
      getQuantity: "cart/getQuantity",
      getPrice: "cart/getPrice",
    }),
    totalQuantityCart() {
      return this.getQuantity;
    },
    totalPriceCart() {
      return this.getPrice;
    },
  },
  methods: {
    toggle() {
      return (this.isOpen = !this.isOpen);
    },
    ...mapActions({
      deleteProduct: "cart/deleteProduct",
      addProduct: "cart/addProduct",
      decreaseProduct: "cart/decreaseProduct",
    }),
    remove(value) {
      this.deleteProduct(value);
    },
    increase(value) {
      this.addProduct(value);
    },
    decrease(value) {
      this.decreaseProduct(value);
    },
    handleScroll(value) {
      value > 0 ? (this.active = true) : (this.active = false);
    },
    category() {
      if (process.client) {
        let height = window.pageYOffset;
        if (height > 0) {
          if (window.innerWidth < 768) {
            let header = document.getElementById("header").offsetHeight;
            return header + "px";
          } else {
            return 110 + "px";
          }
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.gs-main {
  display: flex;
  align-items: flex-start;
  background-color: $alto;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  @include container-fluid;

  @include xs {
    margin-top: 150px;
  }

  @include sm {
    margin-top: 150px;
  }

  @include md {
    margin-top: 150px;
  }

  @include lg {
    margin-top: 80px;
  }

  @include xl {
    margin-top: 80px;
  }

  &__category {
    @include xs {
      position: fixed;
      //top: 0;
      left: 0;
      white-space: nowrap;
      overflow-x: scroll;
      -webkit-overflow-scrolling: touch;
      width: 100%;
      background-color: $white;
      z-index: 997;
    }

    @include sm {
      position: fixed;
      //top: 0;
      left: 0;
      white-space: nowrap;
      overflow-x: scroll;
      -webkit-overflow-scrolling: touch;
      width: 100%;
      background-color: $white;
      z-index: 997;
    }

    @include md {
      position: fixed;
      //top: 0;
      left: 0;
      white-space: nowrap;
      overflow-x: scroll;
      -webkit-overflow-scrolling: touch;
      width: 100%;
      background-color: $white;
      z-index: 997;
    }

    @include lg {
      display: block;
      position: -webkit-sticky;
      position: sticky;
      overflow-x: hidden;
      white-space: normal;
      top: 110px;
      width: 19%;
      margin-right: 1%;
      background-color: transparent;
      padding: 12px 0px;
      z-index: 0;
    }

    @include xl {
      position: -webkit-sticky;
      position: sticky;
      overflow-x: hidden;
      white-space: normal;
      top: 110px;
      width: 19%;
      margin-right: 1%;
      background-color: transparent;
      padding: 12px 0px;
      z-index: 0;
    }
  }

  &__product {
    @include xs {
      width: 100%;
      margin-top: 10px;
    }

    @include sm {
      width: 100%;
      margin-top: 10px;
    }

    @include md {
      width: 100%;
      margin-top: 10px;
    }

    @include lg {
      width: 50%;
    }

    @include xl {
      width: 50%;
    }
  }

  &__checkout {
    @include xs {
      display: none;
    }

    @include sm {
      display: none;
    }

    @include md {
      display: none;
    }

    @include lg {
      display: block;
      background-color: $white;
      position: -webkit-sticky;
      position: sticky;
      top: 120px;
      margin-left: 1%;
      width: 29%;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    @include xl {
      display: block;
      background-color: $white;
      position: -webkit-sticky;
      position: sticky;
      top: 120px;
      margin-left: 1%;
      width: 29%;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  &__order {
    padding: 14px;
    border-bottom: 1px solid $mineShaft;

    &--a {
      text-decoration: none;
      color: $white;
    }

    &--button {
      padding: 0 !important;
    }
  }

  &__total {
    display: flex;
    flex-direction: column;
    padding: 14px;
  }

  &__content {
    width: 100%;
    display: flex;

    &--p-left {
      width: 50%;
      float: left;
      text-align: left;
    }

    &--p-right {
      width: 50%;
      float: left;
      text-align: right;
    }
  }
}

#is-overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  cursor: pointer;
}

.gs-checkout-mobile {
  background-color: $mineShaft;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999;

  @include lg {
    display: none;
  }

  @include xl {
    display: none;
  }

  &__header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 50px;
  }

  &__quantity {
    float: left;
    display: table;
    min-height: 50px;
    color: $white;
    flex: 20%;
    margin-left: 5%;

    &--p {
      vertical-align: middle;
      display: table-cell;
      text-align: left;
    }
  }

  &__cart {
    float: left;
    min-height: 50px;
    text-align: center;
    flex: 50%;

    &--button {
      padding: 0px !important;
      border: 4px solid transparent;

      &:hover {
        color: $frenchRose;
        border: 4px solid $frenchRose;
      }
    }
  }

  &__price {
    float: left;
    display: table;
    min-height: 50px;
    color: $white;
    flex: 20%;
    margin-right: 5%;

    &--p {
      vertical-align: middle;
      display: table-cell;
      text-align: right;
    }
  }

  &__body {
    background-color: $white;
    padding: 0;
    max-height: 1000px;
    overflow: hidden;
    transition: 0.3s ease all;

    &--is-closed {
      max-height: 0;
    }
  }
}
</style>
