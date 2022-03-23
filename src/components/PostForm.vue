<template>
  <form class="m-3" @keydown.enter="createPost">
    <MyInput placeholder="title" v-model="post.title" />
    <MyInput placeholder="description" v-model="post.body" />
    <MyButton
      :disabled="!isValid"
      :class="{ 'opacity-50': !isValid }"
      @click="createPost"
    >
      Create
    </MyButton>
  </form>
</template>

<script>
export default {
  name: "PostForm",
  emits: {
    click: null,
    create: null,
  },
  data() {
    return {
      post: {
        title: "",
        body: "",
        lastId: 1,
      },
    };
  },
  computed: {
    isValid() {
      return this.post.title && this.post.body;
    },
  },
  methods: {
    createPost() {
      if (!this.isValid) {
        return;
      }
      this.post.lastId++;
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>
