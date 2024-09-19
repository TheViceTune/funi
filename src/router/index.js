import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../components/LandingPage.vue' // Import the LandingPage component

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage // Use LandingPage as the home component
    },
    {
      path: '/courses',
      name: 'courses',
      // Lazy-load the CoursesView component when this route is visited
      component: () => import('../views/CoursesView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // Lazy-load the AboutView component
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      // Lazy-load the ContactView component
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/login',
      name: 'login',
      // Lazy-load the LoginView component
      component: () => import('../views/LoginView.vue')
    }
  ]
})

export default router
