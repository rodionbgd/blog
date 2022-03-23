<template>
  <select @change="selectOption">
    <option disabled selected value="">Sort</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "MySelect",
  props: {
    options: {
      type: Array,
    },
  },
  events: {
    "select-option": null,
  },
  methods: {
    selectOption(event) {
      this.$emit("select-option", event.target.value);
    },
  },
};
</script>

<style scoped></style>
