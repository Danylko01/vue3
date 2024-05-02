<!--
 * @Description: 
 * @Author: Danylko
 * @Date: 2024-05-02 11:03:36
 * @LastEditTime: 2024-05-02 21:14:07
-->
<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped></style>
