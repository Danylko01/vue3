<!--
 * @Description: mockjs测试
 * @Author: Danylko
 * @Date: 2024-05-09 08:08:02
 * @LastEditTime: 2024-05-10 08:14:43
-->
<script setup>
import { getData, postData } from './service'
defineOptions({
  name: 'MockPage'
})
const handleTest = async () => {
  const params = {
    name: 'ddd'
  }
  const data = {
    username: 'admin',
    password: '1234567'
  }
  const res = await getData(params)
  console.log('res', res)
  const re = await postData(data)
  console.log('re', re)
}
</script>
<template>
  <div class="test">
    <button @click="handleTest">测试</button>
  </div>
</template>
<style lang="less" scoped>
.test {
  height: 120vh;
  box-sizing: border-box;
  margin-top: 70px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd; /* 添加一个边框 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 设置阴影 */
}
</style>
