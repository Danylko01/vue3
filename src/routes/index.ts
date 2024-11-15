/*
 * @Description:
 * @Author: Danylko
 * @Date: 2024-09-04 19:34:15
 * @LastEditTime: 2024-11-15 14:26:57
 */
import { createWebHistory, createRouter } from 'vue-router';

import HomeView from '../pages/home/index.vue';
import AboutView from '../pages/about/index.vue';

const routes = [
	{ path: '/home', component: HomeView },
	{ path: '/about/:id', component: AboutView },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
