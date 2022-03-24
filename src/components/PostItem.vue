<template>
  <li
    class="w-full px-4 py-2 border-b border-gray-200 rounded-lg dark:border-gray-600"
  >
    <div class="flex">
      <section class="w-full h-16 min-h-full">
        <p>
          <strong>Title:</strong>
          {{ post.title }}
        </p>
        <p>
          <strong>Description:</strong>
          {{ post.body }}
        </p>
      </section>
      <MyButton @click="$router.push(`/posts/${post.id}`)"> &#9757; </MyButton>
      <MyButton class="mr-2 ml-2" @click="$emit('remove', post)"> x </MyButton>
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
