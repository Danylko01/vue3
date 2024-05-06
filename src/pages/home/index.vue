<!--
 * @Description: 
 * @Author: Danylko
 * @Date: 2024-05-02 20:56:10
 * @LastEditTime: 2024-05-06 20:06:05
-->
<script setup>
import { inject, ref } from 'vue'

defineOptions({
  name: 'HomePage'
})
const images = ref([
  '/src/assets/images/ali.jpg',
  '/src/assets/images/lvbu.jpg',
  '/src/assets/images/yasuo.jpg',
  '/src/assets/images/yongen.jpg'
])
const currentIndex = ref(0)
const config = inject('variable')
const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
  console.log(currentIndex.value)
}
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length
}
const goToSlide = (index) => {
  currentIndex.value = index
}
console.log('config', config)
const autoSlide = () => {
  setInterval(() => {
    nextSlide()
  }, 5000)
}
autoSlide()
</script>
<template>
  <div class="home">
    <div class="item">
      <div class="carousel" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <img v-for="(image, index) in images" :key="index" :src="image" />
      </div>
      <div class="carousel-controls">
        <span class="arrow left" @click="prevSlide">&#10094;</span>
        <span class="arrow right" @click="nextSlide">&#10095;</span>
      </div>
      <div class="carousel-indicators">
        <span
          v-for="(image, index) in images"
          :key="index"
          @click="goToSlide(index)"
          :class="{ active: index === currentIndex }"
        ></span>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.home {
  margin-top: 70px;
  height: 100vh;
  margin-left: 200px;
  overflow: hidden;
  .item {
    box-sizing: border-box;
    margin-bottom: 20px;
    width: 800px;
    height: 470px;
    position: relative;
    // padding: 20px;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #ddd; /* 添加一个边框 */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 设置阴影 */
    .carousel {
      display: flex;
      translate: transform 0.5s ease;
      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }
    .carousel-controls {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      display: flex;
      justify-content: space-between;
      z-index: 1;
      .arrow {
        font-size: 24px;
        color: #fff;
        cursor: pointer;
      }
    }
    .carousel-indicators {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      span {
        width: 10px;
        height: 10px;
        background-color: #fff;
        border-radius: 50%;
        margin: 0 5px;
        cursor: pointer;
      }
      span.active {
        background-color: #000;
      }
    }
  }
}
</style>
