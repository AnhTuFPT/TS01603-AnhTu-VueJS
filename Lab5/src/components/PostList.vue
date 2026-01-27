<script setup>
defineProps({
  posts: Array
})
</script>

<template>
  <div>
    <h3>Danh sách bài viết</h3>

    <div
      v-for="(post, index) in posts"
      :key="index"
      class="post"
    >
      <h4 :style="{ color: post.titleColor }">
        {{ post.title }}
      </h4>

      <p class="author">{{ post.author }}</p>

      <p :style="{ color: post.contentColor }">
        {{ post.content }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.post {
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 15px;
  border-radius: 6px;
  background: #fff;
}

.post h4 {
  font-weight: 600;
  margin-bottom: 6px;
}

.author {
  color: red;
  font-weight: 600;
  margin-bottom: 6px;
}

.post p {
  font-size: 14px;
  line-height: 1.5;
}
</style>
