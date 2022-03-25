import { getPosts } from "@/api";

export const postModule = {
  state: () => ({
    posts: [],
    page: 1,
    limit: 10,
    totalPages: 0,
    options: [
      { value: "title", name: "By Title" },
      { value: "body", name: "By Description" },
    ],
    selectedOption: "",
    searchQuery: "",
    loadingPosts: true,
  }),
  getters: {
    sortPosts(state) {
      if (!state.selectedOption) {
        return state.posts;
      }
      return [...state.posts].sort((post1, post2) =>
        post1[state.selectedOption].localeCompare(post2[state.selectedOption])
      );
    },
    queriedPost(state, getters) {
      if (!state.searchQuery) {
        return getters.sortPosts;
      }
      return getters.sortPosts?.filter((post) =>
        post.body.toLowerCase().includes(state.searchQuery)
      );
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setSelectedOption(state, option) {
      state.selectedOption = option;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery.toLowerCase();
    },
    setLoadingPosts(state, loadingPosts) {
      state.loadingPosts = loadingPosts;
    },
  },
  actions: {
    async loadPosts({ state, commit }) {
      commit("setLoadingPosts", true);
      const { posts, totalPosts } = await getPosts(state.page, state.limit);
      commit("setPosts", posts);
      commit("setTotalPages", Math.ceil(totalPosts / state.limit));
      commit("setLoadingPosts", false);
    },
    async loadMorePosts({ state, commit }) {
      commit("setPage", state.page + 1);
      const { posts: loadedPosts, totalPosts } = await getPosts(
        state.page,
        state.limit
      );
      commit("setPosts", [...state.posts, ...loadedPosts]);
      commit("setTotalPages", Math.ceil(totalPosts / state.limit));
    },
  },
  namespaced: true,
};
