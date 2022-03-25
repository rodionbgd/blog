import { createStore } from "vuex";
import { postModule } from "./post_module";

export default createStore({
  modules: {
    post: postModule,
  },
});
