import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import router from "./Routes";
import AOS from "aos";
import "aos/dist/aos.css";
const app = createApp(App);
app.use(router);
app.mount("#app");

AOS.init({
    duration: 800,
    easing: "slide",
    once: false,
});
