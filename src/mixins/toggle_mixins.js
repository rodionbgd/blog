export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  emit: {
    "hide-dialog": null,
  },
  methods: {
    hideDialog() {
      this.$emit("hide-dialog");
    },
  },
};
