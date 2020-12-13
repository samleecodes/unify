import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/Index.vue';
import About from '../views/About.vue';
import Activities from '../views/Activities.vue';
import Welfare from '../views/Welfare.vue';
import Contact from '../views/Contact.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/activities',
    name: 'Activities',
    component: Activities,
  },
  {
    path: '/welfare',
    name: 'Welfare',
    component: Welfare,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
