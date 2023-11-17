import { createRouter, createWebHistory } from "vue-router";
import Home from './components/Home.vue'
import NotFound from './components/NotFound.vue'
import PageTwo from './components/PageTwo.vue'

export const routes = [
  {
    path: '/console/',
    redirect: { name: 'home' }
  },
  {
    path: '/console/home',
    name: 'home',
    component: Home
  },
  {
    path: '/console/page2',
    name: 'page2',
    component: PageTwo
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;