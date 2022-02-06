import { createApp } from 'vue'
import App from './App.vue'
import "./assets/style.css"
import router from "./router.js"

console.log(router)
// console.log(router1)

const app = createApp(App);
app.use(router)
app.mount('#app')
