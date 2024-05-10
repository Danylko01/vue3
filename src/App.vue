<!--
 * @Description: 
 * @Author: Danylko
 * @Date: 2024-05-02 11:03:36
 * @LastEditTime: 2024-05-09 08:17:53
-->
<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <nav>
      <RouterLink class="nav-link" to="/">首页</RouterLink>
      <RouterLink class="nav-link" to="/about">关于</RouterLink>
      <RouterLink class="nav-link" to="/mock">接口模拟</RouterLink>
    </nav>
  </header>
  <div class="container">
    <div class="left"></div>
    <div class="center">
      <RouterView />
    </div>
    <div class="right"></div>
  </div>
</template>

<style lang="less" scoped>
header {
  width: 100%;
  height: 50px;
  background-color: #222;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  z-index: 999;
  nav {
    .nav-link {
      padding: 0 20px;
    }
  }
}
.container {
  display: grid;
  grid-template-columns: auto 1200px auto;
  background-color: #f1f2f5;
}
</style>
