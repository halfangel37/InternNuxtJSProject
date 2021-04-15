<template>
  <footer class="footer">
    <div class="footer__flex-container">
      <div class="footer__image">
        <img src="@/static/logo.png" class="logo" alt width="250px" height="100px" />
      </div>
      <div class="footer__about-us">
        <ElementsGsTypography class="footer__title">VỀ CHÚNG TÔI</ElementsGsTypography>

        <nuxt-link nuxt to="/" class="footer__text">
          <ElementsGsTypography>Chính sách bảo mật</ElementsGsTypography>
        </nuxt-link>

        <nuxt-link nuxt to="/" class="footer__text">
          <ElementsGsTypography>Điều khoản dịch vụ</ElementsGsTypography>
        </nuxt-link>
      </div>
      <div class="footer__customer-support">
        <ElementsGsTypography class="footer__title">HỖ TRỢ KHÁCH HÀNG</ElementsGsTypography>
        <a href="tel:0123456789" class="footer__text">
          <ElementsGsTypography>Delivery: 0123456789</ElementsGsTypography>
        </a>
        <a href="tel:0123456789" class="footer__text">
          <ElementsGsTypography>Hotline: 0123456789</ElementsGsTypography>
        </a>
        <ElementsGsTypography class="footer__text-address">Địa chỉ: 168/6, Bùi Thị Xuân, Tân Bình, TP.HCM</ElementsGsTypography>
      </div>
    </div>
    <div class="footer-end">
      <ElementsGsTypography
        center
        class="footer-end__title"
      >CÔNG TY TNHH GIẢI PHÁP DI ĐỘNG ỨNG DỤNG LỐC XOÁY</ElementsGsTypography>
      <br />
      <ElementsGsTypography class="footer-end__text">168/6,Bùi Thị Xuân, Tân Bình, TP.HCM</ElementsGsTypography>
    </div>
  </footer>
</template>

<script>
export default {
  name: "GsFooter",
};
</script>

<style lang='scss' scoped>

.footer {
  background-color: $mineShaft;
  padding-top: 32px;
  color: $white;
  padding-left: 250px;
  &__flex-container {
    display: flex;
  }
  &__about-us {
    margin-left: 100px;
  }
  &__customer-support {
    margin-left: 350px;
  }
  &__text {
    display: block;
    color: $white;
    text-decoration: none;
    line-height: 1.5;
    &:hover {
      color: $frenchRose;
    }
  }
  &__title {
    font-weight: bold;
    line-height: 25px;
    margin-bottom: 25px;
    color: $white;
  }
}
.footer-end {
  margin-top: 30px;
  padding-bottom: 15px;
  &__title {
    margin-bottom: 5px;
  }
}
/* Medium devices ( 1400px and down) */
@media only screen and (max-width: 1400px) {
  .footer {
    padding-left: 120px;
    padding-right: 5px;
    &__about-us {
      margin-left: 50px;
    }
    &__customer-support {
      margin-left: 120px;
    }
  }
}
/* Small devices (phones, 1000px and down) */
@media only screen and (max-width: 1000px) {
  .footer {
    padding-left: 10px;
    padding-right: 10px;
    &__flex-container {
      flex-direction: column;
    }
    &__image {
      text-align: center;
    }
    &__about-us,
    &__customer-support {
      margin-left: 5px;
      text-align: center;
    }
    &__text,
    &__text-address {
      text-align: center;
      line-height: 1.2;
      margin-top: 10px;
    }
    &__title {
      margin: 35px 0 5px 0;
    }
  }
  .footer-end {
    text-align: center;
  }
}
</style>>

