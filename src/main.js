/*
 * @Description:
 * @Author: Danylko
 * @Date: 2024-08-26 20:31:44
 * @LastEditTime: 2024-09-04 19:41:32
 */
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './routes/index.js';
createApp(App).use(router).mount('#root');
