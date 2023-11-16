import { createRouter, createWebHistory } from "vue-router";
import Home from './components/Home.vue'
import NotFound from './components/NotFound.vue'
import PageTwo from './components/PageTwo.vue'

export const routes = [
  {
    path: '/',
    redirect: { path: '/home' }
  },
  {
    path: '/page2',
    component: PageTwo
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  },
  {
    path: '/home',
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;