/*
 * @Description:
 * @Author: Danylko
 * @Date: 2024-05-02 11:03:36
 * @LastEditTime: 2024-05-10 06:58:11
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve('src/assets/styles/base.less')}";`
        },
        javascriptEnabled: true
      }
    }
  },
  server: {
    port: 8080
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8080', // 将接口请求代理到 Mock.js 服务的地址
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '') // 去掉请求路径中的 '/api' 前缀
    //   }
    // }
  }
})
