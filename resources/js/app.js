import './bootstrap';
import { createApp } from 'vue/dist/vue.esm-bundler';


/*import App from './App.vue'*/
import DisplayProducts from "@/components/DisplayProducts.vue";

const app = createApp({});

app.component('display-products',DisplayProducts);

app.mount("#app");
