import { createApp } from "vue";
import { router } from "@/router/router";
import "@/assets/tailwind.css";

import App from "@/App.vue";
import components from "@/components/UI/index";
import directives from "@/directives/index";
import store from "@/store";

const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});
app.use(router).use(store).mount("#app");
