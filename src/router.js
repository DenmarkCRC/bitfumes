
import { createRouter, createWebHistory } from 'vue-router';
import MyCalendar from './pages/MyCalendar';
import DcHeroes from './pages/DcHeroes';
import HomePage from './pages/HomePage.vue';
import MarkDown from './pages/MarkDown.vue';
import ImageSlider from './pages/ImageSlider.vue';


// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: HomePage },
    { path: '/DcHeroes', component: DcHeroes },
    { path: '/calendar', component: MyCalendar },
    { path: '/markdown', component: MarkDown },
    { path: '/slider', component: ImageSlider },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

console.log('test')

export default router