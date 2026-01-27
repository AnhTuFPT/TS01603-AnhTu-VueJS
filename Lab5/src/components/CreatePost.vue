<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add-post'])

const title = ref('')
const author = ref('')
const content = ref('')

const submitPost = () => {
  if (!title.value || !author.value || !content.value) return

  emit('add-post', {
    title: title.value,
    author: author.value,
    content: content.value,
    titleColor: '#2e7d32',
    contentColor: '#000000'
  })

  title.value = ''
  author.value = ''
  content.value = ''
}
</script>

<template>
  <div class="create-box">
    <h3>Tạo bài viết mới</h3>

    <input v-model="title" placeholder="Tiêu đề bài viết" />
    <input v-model="author" placeholder="Tên tác giả" />
    <textarea v-model="content" placeholder="Nội dung bài viết"></textarea>

    <button class="btn" @click="submitPost">Đăng bài</button>
  </div>
</template>


<style>
.create-box {
  border: 1px solid #e0e0e0;
  padding: 20px;
  background: #fff;
  border-radius: 6px;
  margin-bottom: 20px;
}

.create-box h3 {
  margin-bottom: 16px;
  font-size: 20px;
}

.create-box input,
.create-box textarea {
  display: block;
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 12px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 6px;
  outline: none;
}

.create-box textarea {
  min-height: 100px;
  resize: vertical;
}

.create-box .btn {
  background: #2196f3;
  color: #fff;
  border: none;
  padding: 8px 18px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
}

.create-box .btn:hover {
  background: #1976d2;
}

</style>
