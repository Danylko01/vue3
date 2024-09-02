<!--
 * @Description: 
 * @Author: Danylko
 * @Date: 2024-08-26 20:31:28
 * @LastEditTime: 2024-09-01 23:21:10
-->
<template>
	<img :src="smallImg" alt="小于10kb的图片" />
	<img :src="bigImg" alt="大于于10kb的图片" />
	<!-- 小图片背景容器 -->
	<div className="smallImg"></div>
	<!-- 大图片背景容器 -->
	<div className="bigImg"></div>
	<div class="a">ccc</div>
</template>

<script setup lang="ts">
import smallImg from '@/assets/imgs/5kb.png';
import bigImg from '@/assets/imgs/22kb.png';
import '@/app.css';
import '@/app.less';
</script>

<style scoped>
h2 {
	color: red;
	transform: translateY(100px);
}
</style>
