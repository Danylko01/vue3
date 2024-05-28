/*
 * @Description:
 * @Author: Danylko
 * @Date: 2024-05-02 11:03:36
 * @LastEditTime: 2024-05-09 08:00:53
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import '@/assets/styles/reset.css'
// import '../mock/user'

axios
  .get('/config.json')
  .then((res) => {
    const { variable } = res.data
    const app = createApp(App)
    app.provide('variable', variable)
    app.use(createPinia())
    app.use(router)
    app.mount('#app')
  })
  .catch((error) => {
    console.error('Failed to load data.json:', error)
  })
