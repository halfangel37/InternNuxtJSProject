<template>
  <div class="gs-field">
    <label class="gs-field__label" v-if="label">{{ label }}</label>
    <div class="gs-field__control">
      <input
        class="gs-field__input"
        :class="validateClass"
        type="text"
        :placeholder="placeholder"
        @input="input($event)"
        :value="value"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "GsInput",
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    error: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    input(event) {
      this.$emit("input", event.target.value);
    },
  },
  computed: {
    validateClass() {
      return {
        "gs-field__input--is-danger": this.error,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.gs-field {
  &:not(:last-child) {
    margin-bottom: 0.75em;
  }

  &__label {
    &:not(:last-child) {
      margin-bottom: 0.75em;
    }

    display: block;
    font-size: 1rem;
    font-weight: 700;
  }

  &__control {
    box-sizing: border-box;
    display: block;
    clear: both;
    font-size: 1rem;
    text-align: center;

    &__help-is-danger {
      color: $frenchRose;
      display: block;
      font-size: 0.75rem;
      margin-top: 0.25rem;
    }
  }

  &__input {
    padding: 12px 10px;
    border: 1px solid $silver;
    border-radius: 4px;
    box-sizing: border-box;
    width: 100%;
    font-size: 16px;
    font-family: $montserrat;
    &:focus {
      outline: none;
    }

    &--is-danger {
      border-color: $frenchRose;
    }
  }
}
</style>
