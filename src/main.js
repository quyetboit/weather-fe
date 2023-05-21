import { createApp } from "vue";
import "./assets/styles/global.css";
import App from "./App.vue";
import router from "./app.routes";

createApp(App).use(router).mount("#app");
