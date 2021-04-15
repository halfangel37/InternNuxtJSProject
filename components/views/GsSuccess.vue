<template>
  <div class="gs-success">
    <div class="gs-success__container">
      <ElementsGsTypography title bold center class="gs-success__title">BẠN ĐÃ ĐẶT HÀNG THÀNH CÔNG</ElementsGsTypography>
      <ElementsGsTypography
        center
        class="gs-success__sub-title"
      >Cám ơn Quý khách đã mua sắm tại https://abc.com</ElementsGsTypography>
      <ElementsGsTypography
        center
        class="gs-success__sub-title"
      >Đơn hàng của Quý khách đang được xử lý. Mã số đơn hàng của Quý khách là:</ElementsGsTypography>
      <ElementsGsButton class="gs-success__code">
        <ElementsGsTypography block bold class="gs-success__code--p">123456789</ElementsGsTypography>
      </ElementsGsButton>
      <ElementsGsTypography center class="gs-success__sub-title">
        Nhân viên của chúng tôi sẽ sớm liên hệ với Quý khách trong thời gian sớm
        nhất.
      </ElementsGsTypography>
      <ElementsGsTypography center class="gs-success__sub-title">
        Nếu Quý khách có thắc mắc vui lòng liên liên hệ với chúng tôi qua số
        hotline
        <a
          href="tel:08123 456 789"
        >
          <ElementsGsTypography>(08) 123 456 789</ElementsGsTypography>
        </a>
      </ElementsGsTypography>
      <nuxt-link nuxt :to="{ name: 'index' }" class="gs-success__back">
        <ElementsGsButton class="gs-success__back--button">
          <ElementsGsTypography block class="gs-success__back--p">Nhấn vào đây để trở về trang chủ</ElementsGsTypography>
        </ElementsGsButton>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "GsSuccess",
  props: {},
};
</script>

<style lang="scss" scoped>
.gs-success {
  background-color: $alto;
  height: 100vh;
  padding: 2rem 1rem;
  padding-right: 0;
  padding-left: 0;
  border-radius: 0;

  @include xs {
    width: 100%;
  }

  &__container {
    display: flex;
    flex-direction: column;
    @include container-fluid;
  }

  &__title {
    font-size: 25px !important;
  }

  &__sub-title {
    margin-top: 5px;
  }

  &__code {
    margin: 15px auto;
    line-height: 2.5rem;
    padding: 0px !important;

    @include xs {
      width: 100%;
    }

    @include lg {
      width: 25%;
    }

    &--p {
      font-size: 25px;
    }
  }

  &__back {
    margin: 15px auto;
    line-height: 1.5rem;

    &--button {
      padding: 0px !important;
    }

    &--p {
      background-color: $emerald !important;
    }
  }
}
</style>
