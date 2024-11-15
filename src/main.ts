/*
 * @Description:
 * @Author: Danylko
 * @Date: 2024-08-26 20:31:44
 * @LastEditTime: 2024-11-15 14:38:29
 */
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './routes/index.ts';
createApp(App).use(router).mount('#root');
