import Navbar from './components/navbar.js';
import Foot from './components/foot.js';
import Home from './components/home.js';
import About from './components/about.js';
import Contact from './components/contact.js';

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        { path: '/vue-spa/', component: Home },
        { path: '/vue-spa/about', component: About },
        { path: '/vue-spa/contact', component: Contact },
    ],
});

const app = Vue.createApp({
    data() {
        return {};
    },
    components: {
        Navbar,
        Foot,
    },
});

app.use(router);

app.mount('#app');
