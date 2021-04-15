<template>
  <div>
    <label class="label" v-if="label">{{label}}</label>
    <div class="custom-select-wrapper">
      <div class="custom-select">
        <div class="custom-select__trigger" @click="toggleTag">
          <span class="select-content" v-if="!getTextByValue">{{selectContent}}</span>
          <span>{{getTextByValue}}</span>
          <div v-if="icon">
            <gs-icon v-if="show" icon="angle-down" />
            <gs-icon v-else icon="angle-up" />
          </div>
        </div>
        <div class="custom-select__options" v-show="show">
          <span
            v-for="(opt, index) in options"
            :key="index"
            :value="opt"
            @click="changeOption(opt)"
            class="custom-select__option"
          >{{ opt.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: [Array, String],
      default: () => [],
    },
    label: {
      type: String,
      default: "",
    },
    icon: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Number],
      default: "",
    },
    selectContent: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      show: false,
    };
  },

  created() {
    if (process.client) {
      window.addEventListener("click", this.close);
    }
  },

  beforeDestroy() {
    if (process.client) {
      window.removeEventListener("click", this.close);
    }
  },
  methods: {
    toggleTag() {
      if (this.options != "") {
        this.show = !this.show;
      }
      this.$emit("click");
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.show = false;
      }
    },
    changeOption(opt) {
      this.show = false;
      this.$emit("input", opt.value);
      this.$emit("change");
    },
  },
  computed: {
    getTextByValue() {
      let value = this.options.find((option) => this.value === option.value);
      return value ? value.text : "";
    },
  },
};
</script>

<style lang='scss' scoped>
.custom-select-wrapper {
  position: relative;
  user-select: none;
  width: 100%;
  font-size: 16px;
  .custom-select {
    position: relative;
    display: flex;
    flex-direction: column;
    &__trigger {
      position: relative;
      display: flex;
      justify-content: space-between;
      padding: 12px 10px;
      cursor: pointer;
      border: 1px solid $silver;
      border-radius: 4px;
    }
    &__options {
      position: absolute;
      display: block;
      visibility: visible;
      pointer-events: all;
      border: 1px solid $silver;
      border-top: 0px;
      border-radius: 4px;
      z-index: 2;
      top: 100%;
      background-color: $white;
      width: 100%;
      text-align: left;
    }
    &__option {
      position: relative;
      display: block;
      padding: 12px 10px;
      cursor: pointer;
    }
    &__option:hover {
      background-color: $silver;
    }
  }
}
.label {
  font-size: 16px;
}
</style>
