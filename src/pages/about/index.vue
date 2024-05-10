<!--
 * @Description: 
 * @Author: Danylko
 * @Date: 2024-05-02 21:03:41
 * @LastEditTime: 2024-05-06 20:31:49
-->
<script setup>
import { ref } from 'vue'
defineOptions({
  name: 'AboutPage'
})
// 创建一个响应式的列表，用于存储排序后的元素顺序
const sortedList = ref(['Item 1', 'Item 2', 'Item 3', 'Item 4'])

// 处理拖拽开始事件
const handleDragStart = (index, event) => {
  event.dataTransfer.setData('text/plain', index.toString())
}

// 处理放置事件
const handleDrop = (index, event) => {
  event.preventDefault()
  const draggedIndex = parseInt(event.dataTransfer.getData('text/plain'))
  const newList = [...sortedList.value]
  const removedItem = newList.splice(draggedIndex, 1)[0]
  newList.splice(index, 0, removedItem)
  sortedList.value = newList
}
</script>

<template>
  <div class="about">
    <div
      v-for="(item, index) in sortedList"
      :key="index"
      :draggable="true"
      @dragstart="handleDragStart(index, $event)"
      @dragover.prevent
      @drop="handleDrop(index, $event)"
      class="item"
    >
      {{ item }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.about {
  height: 120vh;
  box-sizing: border-box;
  margin-top: 70px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd; /* 添加一个边框 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 设置阴影 */
  .item {
    width: 200px;
    height: 80px;
    margin-bottom: 10px;
    background-color: #cf8c8c;
  }
}
</style>
