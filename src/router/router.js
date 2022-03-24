import MyMain from "@/pages/MyMain.vue";
import PostPage from "@/pages/PostPage.vue";
import PostId from "@/pages/PostId.vue";
import PostAbout from "@/pages/PostAbout.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: MyMain,
  },
  {
    path: "/posts",
    component: PostPage,
  },
  {
    path: "/posts/:id",
    component: PostId,
  },
  {
    path: "/about",
    component: PostAbout,
  },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
