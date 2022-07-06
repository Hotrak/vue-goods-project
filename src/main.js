import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import Input from "@/components/ui/Input.vue";

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);

app.component("ui-input", Input);

app.use(router);

app.mount("#app");
