/*
 * @Description: mockjs
 * @Author: Danylko
 * @Date: 2024-05-09 07:42:58
 * @LastEditTime: 2024-05-10 08:13:22
 */
// 引入 Mock.js
import Mock from 'mockjs'

// 模拟 GET 请求
Mock.mock('/api/user', 'get', {
  id: '@id',
  username: '@cname',
  'age|20-30': 25
})

// 定义Mock接口
Mock.mock(RegExp('/api/data.*'), 'get', (options) => {
  console.log('option', options)
  return {
    data: 'ddd'
  }
})

// 模拟 POST 请求
Mock.mock('/api/login', 'post', (options) => {
  console.log(options)
  const { username, password } = JSON.parse(options.body)
  console.log('username', username)
  if (username === 'admin' && password === '123456') {
    return {
      code: 200,
      message: '登录成功',
      token: 'mock_token'
    }
  } else {
    return {
      code: 401,
      message: '用户名或密码错误'
    }
  }
})
