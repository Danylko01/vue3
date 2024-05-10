/*
 * @Description:
 * @Author: Danylko
 * @Date: 2024-05-02 11:03:36
 * @LastEditTime: 2024-05-09 08:14:48
 */
import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomePage from '../pages/home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/about/index.vue')
    },
    {
      path: '/mock',
      name: 'mock',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/mock/index.vue')
    }
  ]
})

export default router
