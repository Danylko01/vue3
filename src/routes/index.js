/*
 * @Description:
 * @Author: Danylko
 * @Date: 2024-09-04 19:34:15
 * @LastEditTime: 2024-09-04 20:09:47
 */
import { createWebHistory, createRouter } from 'vue-router';

import HomeView from '../pages/home';
import AboutView from '../pages/about';

const routes = [
	{ path: '/home', component: HomeView },
	{ path: '/about/:id', component: AboutView },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
