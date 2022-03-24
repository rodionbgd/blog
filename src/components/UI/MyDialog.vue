<template>
  <div
    tabindex="-1"
    class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full"
    v-if="show"
    @click="hideDialog"
  >
    <div
      class="relative p-4 w-full max-w-md h-full md:h-auto m-auto"
      @click.stop
    >
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import toggleMixins from "@/mixins/toggle_mixins";

export default {
  name: "MyDialog",
  mixins: [toggleMixins],
};
</script>

<style scoped></style>
