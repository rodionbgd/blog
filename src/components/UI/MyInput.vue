<template>
  <input
    class="form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    type="text"
    placeholder="description"
    :value="modelValue"
    @input="this.$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: "MyInput",
  props: {
    modelValue: [String, Number],
  },
};
</script>
