<template>
  <div class="text-lg">
    <div v-if="posts.length">
      <p class="font-bold text-xl mb-2">Posts list</p>
      <ul
        class="w-full text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <PostItem
          class="post p-2 m-3"
          v-for="post in posts"
          :key="post.id"
          :post="post"
          @remove="$emit('remove', post)"
        />
      </ul>
    </div>
    <div v-else>No posts</div>
  </div>
</template>

<script>
import PostItem from "./PostItem.vue";

export default {
  name: "PostList",
  components: { PostItem },
  props: {
    posts: {
      value: [],
      required: true,
    },
  },
  emits: {
    remove: null,
  },
};
</script>

<style scoped>
.post {
  border: 2px solid teal;
}
</style>
