<!--
 * @Description: 
 * @Author: Danylko
 * @Date: 2024-05-02 20:56:10
 * @LastEditTime: 2024-05-03 07:37:07
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
  <div>HomePage</div>
</template>
<style lang="less" scoped>
div {
  color: @color;
}
</style>
