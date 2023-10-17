/** @format */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

function pathResolve(dir) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: [
      {
        find: '@',
        replacement: pathResolve('src')
      }
    ]
  },

  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        //生产环境时移除 console
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
