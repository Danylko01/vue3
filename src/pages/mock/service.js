/*
 * @Description:
 * @Author: Danylko
 * @Date: 2024-05-10 06:45:21
 * @LastEditTime: 2024-05-23 08:24:25
 */
import request from '@/utils/request'

// 发送JSON数据
export const postData = async (data) => {
  const response = await request.post('/login', data, {
    headers: {
      'Content-Type': 'application/json' // 设置 Content-Type
    }
  })
  return response
}

// 封装 GET 请求为同步函数
export const getData = async (params) => {
  const response = await request.get(
    '/data',
    { params },
    {
      headers: {
        'Content-Type': 'application/json' // 设置 Content-Type
      }
    }
  )
  return response
}

export const getTest = async () => {
  const response = await request.get('/test', {
    headers: {
      'Content-Type': 'application/json' // 设置 Content-Type
    }
  })
  return response
}
