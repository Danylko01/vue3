<!--
 * @Description: 
 * @Author: Danylko
 * @Date: 2024-09-04 19:36:10
 * @LastEditTime: 2024-09-04 19:37:23
-->
<template>
	<div>about主页</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
console.log("aobur", route.params.id);
</script>

<style scoped></style>
