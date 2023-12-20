import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue'; // Replace with your actual components
import Profile from './views/Profile.vue'; // Replace with your actual components

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  // Add more routes as needed
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;