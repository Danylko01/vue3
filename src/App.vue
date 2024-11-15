<!--
 * @Description: 
 * @Author: Danylko
 * @Date: 2024-08-26 20:31:28
 * @LastEditTime: 2024-09-15 21:24:03
-->
<template>
	<nav>
		<RouterLink to="/home">Go to Home</RouterLink>
		<RouterLink to="/about/12">Go to About</RouterLink>
	</nav>
	<RouterView />
</template>

<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
console.log('NODE_ENV1', process.env.NODE_ENV);
console.log('BASE_ENV1', process.env.BASE_ENV);
</script>

<style scoped></style>
