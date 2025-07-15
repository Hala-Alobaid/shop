
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import UserAuth from './components/UserAuth.vue';
import UserSignup from './components/UserSignup.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/UserAuth', component: UserAuth },
  { path: '/UserSignup', component: UserSignup },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
