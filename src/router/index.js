import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../components/LandingPage.vue' // Import the LandingPage component
import CoursesView from '@/views/CoursesView.vue'
import CourseDetail from '@/components/CourseDetail.vue'

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
      component: CoursesView // Lazy-load CoursesView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue') // Lazy-load AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue') // Lazy-load ContactView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue') // Lazy-load LoginView
    },
    {
      path: '/course/:courseId',
      name: 'course-detail',
      component: CourseDetail,
      props: true
    }
  ]
})

export default router
