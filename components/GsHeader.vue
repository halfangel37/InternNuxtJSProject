<template>
  <div class="gs-header" @scroll="handleScroll" :class="scrollClass" id="header">
    <div class="gs-header__brand">
      <img src="@/static/logo.png" alt="Logo" width="140px" height="60px" />
    </div>
    <div class="gs-header__notification">
      <ElementsGsTypography title red>
        <span class="gs-header__notification--span">Free ship trên đơn hàng 400k</span>
      </ElementsGsTypography>
    </div>
    <div class="gs-header__item">
      <ElementsGsSelect v-model="selected" :options="location" class="gs-header__item--select" />
      <div class="gs-header__item--div">
        <gs-icon icon="shopping-cart" size="2x" class="gs-header__item--icon"></gs-icon>
        <div class="gs-header__item--badge">
          <span class="gs-header__item--quantity">{{ quantity }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GsHeader",
  props: {
    count: {
      type: Number,
      default: 0,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selected: "TPHCM",
      location: [
        { text: "Thành phố Hồ Chí Minh", value: "TPHCM" },
        { text: "Hà Nội", value: "HN" },
      ],
    };
  },
  computed: {
    quantity() {
      return this.count;
    },
    scrollClass() {
      return {
        "gs-header--is-active": this.active,
      };
    },
  },
  mounted() {
    if (process.browser) {
      document.addEventListener("scroll", this.handleScroll);
    }
  },
  methods: {
    handleScroll() {
      this.$emit("scroll", window.scrollY);
    },
  },
};
</script>

<style lang="scss" scoped>

.gs-header {
  background-color: $white;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 998;

  &--is-active {
    -webkit-box-shadow: 2px 2px 3px 0px rgba(50, 50, 50, 0.5);
    -moz-box-shadow: 2px 2px 3px 0px rgba(50, 50, 50, 0.5);
    box-shadow: 2px 2px 3px 0px rgba(50, 50, 50, 0.5);
  }

  &__brand {
    text-align: left;
    margin: 10px;
    min-height: 50px;

    @include xs {
      width: 50%;
    }

    @include sm {
      width: 50%;
    }

    @include md {
      width: 55%;
    }

    @include lg {
      width: 25%;
    }

    @include xl {
      width: 20%;
    }
  }

  &__notification {
    display: block;
    text-align: center;
    margin-left: auto;
    margin-right: auto;

    @include xs {
      left: 0;
      right: 0;
      top: 80px;
      border-top: 1px solid $mineShaft;
      line-height: 35px;
      background-color: $white;
      position: fixed;
      width: 100%;
    }

    @include sm {
      left: 0;
      right: 0;
      top: 80px;
      border-top: 1px solid $mineShaft;
      line-height: 35px;
      background-color: $white;
      position: fixed;
      width: 100%;
    }

    @include md {
      left: 0;
      right: 0;
      top: 80px;
      border-top: 1px solid $mineShaft;
      line-height: 35px;
      background-color: $white;
      position: fixed;
      width: 100%;
    }

    @include lg {
      min-height: 50px;
      border-top: none;
      position: relative;
      width: 50%;
      top: 0;

      &--span {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    @include xl {
      min-height: 50px;
      border-top: none;
      position: relative;
      width: 60%;
      top: 0;

      &--span {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  &__item {
    text-align: right;
    margin: 10px;
    min-height: 50px;
    display: flex;
    align-items: center;

    @include xs {
      width: 50%;
    }

    @include sm {
      width: 50%;
    }

    @include md {
      width: 45%;
    }

    @include lg {
      width: 25%;
    }

    @include xl {
      width: 20%;
    }

    &--select {
      flex: 75%;
      text-align: center;
    }

    &--div {
      position: relative;
      flex: 25%;
      text-align: center;
    }

    &--icon {
      color: $mineShaft;
      text-align: center;
    }

    &--badge {
      color: $white;
      background: $brownRus;
      font-weight: bold;
      position: absolute;
      display: inline-table;
      vertical-align: middle;
      width: 30px;
      height: 30px;
      font-size: 14px;
      border-radius: 50%;

      @include xs {
        top: -10px;
        right: 0px;
      }

      @include sm {
        top: -10px;
        right: 5px;
      }

      @include md {
        top: -10px;
        right: 10px;
      }

      @include lg {
        top: -10px;
        right: 0px;
      }

      @include xl {
        top: -10px;
        right: 5px;
      }
    }

    &--quantity {
      display: table-cell;
      vertical-align: middle;
      text-align: center;
    }
  }
}
</style>
