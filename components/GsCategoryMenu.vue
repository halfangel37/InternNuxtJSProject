<template>
  <ElementsGsTypography title>
    <a class="gs-category-link scrollactive-item" :href="'#' + categoryId">{{ categoryName }}</a>
  </ElementsGsTypography>
</template>

<script>
export default {
  name: "GsCategoryMenu",
  props: {
    categoryName: {
      type: String,
      default: "",
    },
    categoryId: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.gs-category-link {
  color: $mineShaft;
  background-color: $white;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;

  &:hover {
    color: $frenchRose;
    border-bottom: 2px solid $frenchRose;
  }

  &--active {
    color: $frenchRose;
    border-bottom: 2px solid $frenchRose;
  }

  @include xs {
    display: inline-block;
    padding: 12px;
  }

  @include sm {
    display: inline-block;
    padding: 12px;
  }

  @include md {
    display: inline-block;
    padding: 12px;
  }

  @include lg {
    display: block;
    padding: 12px;
  }

  @include xl {
    display: block;
    padding: 12px;
  }
}
</style>
