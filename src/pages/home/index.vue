<!--
 * @Description: 
 * @Author: Danylko
 * @Date: 2024-09-04 19:36:03
 * @LastEditTime: 2024-09-04 19:58:19
-->
<template>
	<div>home主页</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const search = computed({
	get() {
		return route.query.search ?? '';
	},
	set(search) {
		router.replace({ query: { search } });
	},
});
console.log('com', search);
</script>

<style scoped></style>
