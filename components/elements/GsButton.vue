<template>
  <span :class="button">
    <slot />
  </span>
</template>
<script>
export default {
  name: "Button",
  props: {
    default: {
      type: Boolean,
      default: true,
    },
    large: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    button() {
      return {
        default: this.default,
        large: this.large,
        block: this.block,
      };
    },
  },
};
</script>
<style lang='scss' scoped>
.default {
  display: inline-block;
  padding: 10px 20px;
  color: $white;
  text-align: center;
  background-color: $primary;
  line-height: 1.5;
  cursor: pointer;
  &:hover {
    background-color: $mineShaft;
    opacity: 0.8;
  }
}

.large {
  padding: 20px;
}
.block {
  display: block;
}
</style>