<script setup>
import { ref } from 'vue'
import CreatePost from './CreatePost.vue'
import PostList from './PostList.vue'

const posts = ref([
  {
    title: 'Bật Mí 8 Nguyên Tắc Phối Màu Quần Áo Sành Điệu',
    author: 'Nguyễn Văn Tèo',
    content:
      'Bạn có thể phối áo màu xanh lá, quần màu kem và giày màu tím theo cách phối màu kiểu tam giác. Hoặc có thể phối các set đồ cùng tông lạnh hoặc nóng ...',
    titleColor: '#2e7d32',   
    contentColor: '#000000'
  }
])

const addPost = (post) => {
  posts.value.push(post)
}
</script>

<template>
  <div class="box">
    <h2>Bài 4</h2>

    <CreatePost @add-post="addPost" />

    <PostList :posts="posts" />
  </div>
</template>

<style scoped>
.box {
  border: 1px solid #ddd;
  padding: 16px;
  background: #fff;
}
</style>
