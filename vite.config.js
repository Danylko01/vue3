/*
 * @Description:
 * @Author: Danylko
 * @Date: 2024-05-02 11:03:36
 * @LastEditTime: 2024-05-03 07:39:30
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
  }
})
