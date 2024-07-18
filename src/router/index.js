import { createWebHistory, createRouter } from 'vue-router'

import Home from '../components/Home.vue'

const routes = [
  { path: '/', redirect: '/home'},
  { path: '/home', component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = sessionStorage.getItem('isLoggedIn'); 
//   // TO DO
//   if (to.path !== '/login' && !isAuthenticated) {
//     next('/login')
//     window.alert("Please Loin first")
//   } else {
//     next() 
//   }
// })

export default router;