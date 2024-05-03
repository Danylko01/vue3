<!--
 * @Description: 
 * @Author: Danylko
 * @Date: 2024-05-02 20:56:10
 * @LastEditTime: 2024-05-03 21:10:01
-->
<script setup>
import { inject } from 'vue'

defineOptions({
  name: 'HomePage'
})
const config = inject('variable')
console.log('config', config)
</script>
<template>
  <div class="home">
    <div class="item">item1</div>
    <div class="item">item2</div>
    <div class="item">item1</div>
    <div class="item">item2</div>
  </div>
</template>
<style lang="less" scoped>
.home {
  margin-top: 70px;
  // height: 100vh;
  margin-left: 200px;
  overflow: hidden;
  .item {
    box-sizing: border-box;
    margin-bottom: 20px;
    width: 800px;
    height: 400px;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd; /* 添加一个边框 */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 设置阴影 */
  }
}
</style>
