<template>
  <div class="checkout">
    <div class="checkout__flex-row">
      <div class="checkout__small-cart">
        <div class="checkout__show-cart" @click="toggleCart">
          <ElementsGsTypography class="checkout__right-content__cart__title" block center>
            Giỏ hàng
            <gs-icon v-if="showToggleCart" icon="angle-down" />
            <gs-icon v-else icon="angle-up" />
          </ElementsGsTypography>
        </div>
        <GsCartCheckOutItem
          v-show="showToggleCart"
          class="checkout__right-content__cart__content"
          v-for="(cart, index) in carts"
          :key="index"
          :product="cart"
          @remove="remove(cart)"
          @increase="increase(cart)"
          @decrease="decrease(cart)"
        ></GsCartCheckOutItem>
      </div>
      <div class="checkout__left-content">
        <nuxt-link nuxt to="/" class="router">
          <gs-icon icon="angle-double-left" />
          <ElementsGsTypography class="checkout__continue">Tiếp tục mua hàng</ElementsGsTypography>
        </nuxt-link>

        <div class="checkout__commitment">
          <ElementsGsTypography>Thông tin của bạn tuyệt đối bảo mật</ElementsGsTypography>
        </div>
        <ElementsGsTypography class="checkout__title" bold>Thông tin khách hàng</ElementsGsTypography>
        <div class="checkout__customer-infor">
          <div class="checkout__wrapp-input">
            <ElementsGsInput
              class="checkout__input"
              placeholder="Tên / Name"
              v-model.trim="$v.name.$model"
            />
            <ElementsGsTypography
              error
              class="checkout__input-error"
              v-if="$v.name.$error"
            >Bạn chưa nhập tên</ElementsGsTypography>
          </div>
          <div class="checkout__wrapp-input">
            <ElementsGsInput
              class="checkout__input"
              placeholder="Địa chỉ Email / Email Address"
              v-model.trim="$v.email.$model"
            />
            <ElementsGsTypography
              error
              class="checkout__input-error"
              v-if="$v.email.$error"
            >Bạn chưa nhập email</ElementsGsTypography>
          </div>
          <div class="checkout__wrapp-input">
            <ElementsGsInput
              class="checkout__input"
              placeholder="Số điện thoại / Phone Number"
              v-model.trim="$v.phone.$model"
            />
            <ElementsGsTypography
              error
              class="checkout__input-error"
              v-if="$v.phone.$error"
            >Số điện thoại cần 10 hoặc 11 số</ElementsGsTypography>
          </div>
          <div class="checkout__wrapp-input">
            <ElementsGsInput class="checkout__input" v-model.trim="$v.city.$model" />
            <ElementsGsTypography
              error
              class="checkout__input-error"
              v-if="$v.city.$error"
            >Bạn chưa nhập thành phố</ElementsGsTypography>
          </div>
          <div class="checkout__wrapp-input">
            <ElementsGsSelect
              @change.native="wardError"
              selectContent="Chọn Quận / Huyện"
              icon
              class="checkout__select"
              v-model="districtSelect"
              :options="customerLocationDatas"
              @change="resetValue"
            />
            <ElementsGsTypography
              error
              class="checkout__input-error"
              v-if="(checkDistrict) && (!$v.districtSelect.required)"
            >Bạn chưa chọn Quận</ElementsGsTypography>
          </div>
          <div class="checkout__wrapp-input">
            <ElementsGsSelect
              selectContent="Chọn Phường / Xã"
              icon
              class="checkout__select"
              v-model="wardSelect"
              :options="findWards"
              @click="checkBefore"
            />
            <ElementsGsTypography
              error
              class="checkout__input-error"
              v-if="($v.districtSelect.required) && (!$v.wardSelect.required) "
            >Bạn chưa chọn phường</ElementsGsTypography>
          </div>
          <div class="checkout__wrapp-input">
            <ElementsGsInput
              class="checkout__input"
              placeholder="Địa chỉ / Address"
              v-model.trim="$v.address.$model"
            />
            <ElementsGsTypography
              error
              class="checkout__input-error"
              v-if="$v.address.$error"
            >Bạn chưa nhập địa chỉ</ElementsGsTypography>
          </div>
        </div>
        <div class="calculatePrice">
          <div class="calculatePrice__left-content">
            <span>
              <ElementsGsTypography class="left-span" bold block>Tổng tạm tính</ElementsGsTypography>
            </span>
            <span>
              <ElementsGsTypography class="left-span" bold block>VAT ( 10% )</ElementsGsTypography>
            </span>
            <span>
              <ElementsGsTypography class="left-span" bold block>Phí vận chuyển</ElementsGsTypography>
            </span>
            <span>
              <ElementsGsTypography class="left-span" bold block>Tổng tiền</ElementsGsTypography>
            </span>
          </div>
          <div class="calculatePrice__right-content">
            <span>
              <ElementsGsTypography class="right-span" right block>20 000 đ</ElementsGsTypography>
            </span>
            <span>
              <ElementsGsTypography class="right-span" right block>20 000 đ</ElementsGsTypography>
            </span>
            <span>
              <ElementsGsTypography class="right-span" right block>Tùy khu vực</ElementsGsTypography>
            </span>
            <span>
              <ElementsGsTypography class="right-span" right block>22 000 đ</ElementsGsTypography>
            </span>
          </div>
        </div>
        <div class="complete-order">
          <nuxt-link nuxt :to="{name : 'success'}" class="router">
            <ElementsGsButton
              @click.native="orderClick"
              block
              class="complete-order__button"
            >HOÀN TẤT ĐƠN HÀNG</ElementsGsButton>
          </nuxt-link>
          <nuxt-link nuxt to="/" class="router">
            <ElementsGsTypography class="complete-order__continue">
              <gs-icon icon="angle-double-left" />Tiếp tục mua hàng
            </ElementsGsTypography>
          </nuxt-link>
        </div>
      </div>
      <div class="checkout__right-content">
        <div class="checkout__right-content__cart">
          <ElementsGsTypography class="checkout__right-content__cart__title" block center>Giỏ hàng</ElementsGsTypography>
          <GsCartCheckOutItem
            class="checkout__right-content__cart__content"
            v-for="(cart, index) in carts"
            :key="index"
            :product="cart"
            @remove="remove(cart)"
            @increase="increase(cart)"
            @decrease="decrease(cart)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import customerLocationData from "@/assets/customerLocationsData";
import { required, email, helpers } from "vuelidate/lib/validators";

import { mapState, mapActions, mapGetters } from "vuex";

const phoneRegex = helpers.regex(
  "phone",
  /^[0][3|5|7|8|9]\d{8}$|^[0][2]\d{9}$/
);
export default {
  name: "GsCheckOut",

  data() {
    return {
      showToggleCart: false,
      name: "",
      email: "",
      phone: "",
      city: "Thành phố Hồ Chí Minh",
      address: "",
      customerLocationDatas: customerLocationData,
      districtSelect: "",
      wardSelect: "",
      timeSelect: "",
      checkDistrict: false,
    };
  },
  validations: {
    name: {
      required,
    },
    email: {
      required,
      email,
    },
    phone: {
      required,
      phoneRegex,
    },
    city: {
      required,
    },
    districtSelect: {
      required,
    },
    wardSelect: {
      required,
    },
    address: {
      required,
    },
  },

  methods: {
    resetValue() {
      this.wardSelect = "";
    },
    checkBefore() {
      this.checkDistrict = true;
    },
    orderClick() {
      console.log(this.name);
      console.log(this.email);
      console.log(this.city);
      console.log(this.phone);
      console.log(this.districtSelect);
      console.log(this.wardSelect);
      console.log(this.address);
    },
    toggleCart() {
      this.showToggleCart = !this.showToggleCart;
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
  },
  computed: {
    findWards() {
      return this.districtSelect
        ? this.customerLocationDatas.find(
            (customerLocationData) =>
              customerLocationData.value === this.districtSelect
          ).wards
        : [];
    },
    cartQuantity() {
      return this.carts.length;
    },
    ...mapState({
      carts: (state) => state.cart.carts,
    }),
    ...mapGetters({
      getQuantity: "cart/getQuantity",
    }),
    totalQuantityCart() {
      return this.getQuantity;
    },
  },
};
</script>
<style lang='scss' scoped>
.checkout {
  @include container-fluid;
  &__small-cart {
    @include xs {
      display: block;
      margin: 20px 0 20px;
    }
    @include sm {
      display: block;
    }
    @include md {
      display: block;
    }
    @include lg {
      display: none;
    }
  }
  &__flex-row {
    @include xs {
      display: block;
      padding-bottom: 10px;
    }
    @include sm {
      margin: 30px 30px 30px 30px;
    }
    @include md {
      margin: 30px 100px 30px 100px;
    }
    @include lg {
      display: flex;
      margin: 30px 10px 30px 10px;
    }
    @include xl {
      margin: 30px;
    }
  }
  &__title {
    margin: 20px 0 10px;
  }
  &__continue {
    margin-bottom: 20px;
    color: black;
  }
  &__left-content {
    flex-direction: column;
    width: 100%;
    margin-right: 30px;
  }
  &__commitment {
    background-color: $silver;
    padding: 20px 0 20px 20px;
  }
  &__select {
    margin-top: 10px;
  }
  &__wrapp-input {
    height: 60px;
  }
  &__input {
    margin-top: 10px;
    margin-bottom: 0px !important;
  }
  &__image {
    width: auto;
    float: left;
  }
  &__right-content {
    @include sm {
      width: 100%;
    }
    @include md {
    }
    @include lg {
      border-left: 1px solid black;
    }
    @include xl {
      width: 70%;
      border-left: 1px solid black;
    }

    &__cart {
      @include xs {
        display: none;
      }
      @include lg {
        margin-top: 30px;
        margin-left: 30px;
        display: block;
      }
      @include xl {
        margin-top: 30px;
        margin-left: 30px;
      }
      &__title {
        cursor: pointer;
        background-color: $primary;
        padding: 12px 10px;
        color: $white;
      }
      &__content {
        border-bottom: 1px solid;
      }
    }
  }

  .calculatePrice {
    margin-top: 15px;
    border: 1px solid $silver;

    border-radius: 4px;
    display: flex;
    &__left-content {
      width: 50%;
    }
    &__right-content {
      width: 50%;

      float: right;
    }
  }
  .left-span,
  .right-span {
    margin: 30px 10px 30px 10px;
  }
  .complete-order {
    display: block;
    margin: 20px 0;

    &__button {
      float: right;
    }
    &__continue {
      color: black;
      margin-top: 40px;
    }
  }
  .router {
    color: black;
  }
}
</style>
