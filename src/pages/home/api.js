import request from '@/utils/request'
// 发送JSON数据
export const postData = async (data) => {
  const response = await request.post('/endpoint', data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded' // 设置 Content-Type
    }
  })
  return response.data
}

// 封装 GET 请求为同步函数
export const getData = async (params) => {
  const response = await request.get('/endpoint', { params })
  return response
}
