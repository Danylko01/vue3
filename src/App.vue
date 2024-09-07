<!--
 * @Description: 
 * @Author: Danylko
 * @Date: 2024-08-26 20:31:28
 * @LastEditTime: 2024-09-04 20:09:12
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
</script>

<style scoped></style>
