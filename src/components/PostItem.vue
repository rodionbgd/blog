<template>
  <li
    class="w-full px-4 py-2 border-b border-gray-200 rounded-lg dark:border-gray-600"
  >
    <div class="flex">
      <section class="w-full h-16 min-h-full">
        <p>
          <strong>Название:</strong>
          {{ post.title }}
        </p>
        <p>
          <strong>Описание:</strong>
          {{ post.body }}
        </p>
      </section>
      <MyButton @click="$emit('remove', post)"> x </MyButton>
    </div>
  </li>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
