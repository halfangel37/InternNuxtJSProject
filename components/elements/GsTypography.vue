<template>
  <component :is="'p'" :class="classObject">
    <slot />
  </component>
</template>

<script>
export default {
  name: "Typography",
  props: {
    default: {
      type: Boolean,
      default: true,
    },
    title: {
      type: Boolean,
      default: false,
    },
    subTitle: {
      type: Boolean,
      default: false,
    },
    body: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
    left: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
    thin: {
      type: Boolean,
      default: false,
    },
    bold: {
      type: Boolean,
      default: false,
    },
    italic: {
      type: Boolean,
      default: false,
    },
    capitalize: {
      type: Boolean,
      default: false,
    },
    uppercase: {
      type: Boolean,
      default: false,
    },
    lowercase: {
      type: Boolean,
      default: false,
    },
    red: {
      type: Boolean,
      default: false,
    },
    yellow: {
      type: Boolean,
      default: false,
    },
    black: {
      type: Boolean,
      default: false,
    },
    grey: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classObject() {
      return {
        default: this.default,
        title: this.title,
        subTitle: this.subTitle,
        body: this.body,
        error: this.error,
        success: this.success,
        block: this.block,
        center: this.center,
        left: this.left,
        right: this.right,
        thin: this.thin,
        bold: this.bold,
        italic: this.italic,
        capitalize: this.capitalize,
        uppercase: this.uppercase,
        lowercase: this.lowercase,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.default {
  display: inline-block;
  font-weight: normal;
  text-align: left;
}

.title {
  font-size: 16px;
  display: inline;
}

.subTitle {
  font-size: 12.5px;
  display: inline;
}

.body {
  font-size: 14px;
  display: inline;
}

.error {
  font-size: 10px;
  display: inline;
  color: $frenchRose;
}

.success {
  font-size: 10px;
  display: inline;
  color: $emerald;
}

.subTitle {
  font-size: 12.5px;
}

.block {
  display: block;
}

.center {
  text-align: center;
}

.left {
  text-align: left;
}

.right {
  text-align: right;
}

.thin {
  font-weight: 100;
}

.bold {
  font-weight: bold;
}

.italic {
  font-style: italic;
}

.capitalize {
  text-transform: capitalize;
}

.uppercase {
  text-transform: uppercase;
}

.lowercase {
  text-transform: lowercase;
}

.red {
  color: $frenchRose;
}

.yellow {
  color: $mustard;
}

.black {
  color: $mineShaft;
}

.grey {
  color: $alto;
}
</style>
