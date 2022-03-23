import { createApp } from "vue";
import App from "@/App.vue";
import "@/assets/tailwind.css";
import components from "@/components/UI/index";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});
app.mount("#app");
