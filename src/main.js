import { createApp } from "vue";
import "./assets/styles/variable.css";
import "./assets/styles/global.css";
import App from "./App.vue";
import router from "./app.routes";
import { weatherStore } from "./store/weather";

createApp(App).use(router).use(weatherStore).mount("#app");
