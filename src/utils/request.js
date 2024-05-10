/*
 * @Description: axios封装
 * @Author: Danylko
 * @Date: 2024-05-03 00:16:11
 * @LastEditTime: 2024-05-10 07:06:45
 */

import axios from 'axios'

// const BASE_URL = 'https://127.0.0.1:8080'

const request = axios.create({
  // baseURL: BASE_URL,
  timeout: 10000, // 设置请求超时时间为10秒
  headers: {
    'Content-Type': 'application/json' // 设置默认的 Content-Type
  }
})

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在请求发送之前，添加Bearer Token到Authorization头中
    // config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么
    return response
  },
  (error) => {
    // 对响应错误做些什么
    return Promise.reject(error)
  }
)

export default request
