<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const title = ref('')
const content = ref('')
const image = ref(null)

const handleImageChange = (e) => {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    image.value = reader.result 
  }
  reader.readAsDataURL(file)
}

const createPost = () => {
  if (!title.value || !content.value) {
    alert('Vui lòng nhập đầy đủ tiêu đề và nội dung')
    return
  }

  const posts = JSON.parse(localStorage.getItem('posts')) || []

  const newPost = {
    id: Date.now(),
    title: title.value,
    content: content.value,
    image: image.value,
    author: 'Trần Nam Anh',
    createdAt: new Date().toLocaleDateString()
  }

  posts.push(newPost)
  localStorage.setItem('posts', JSON.stringify(posts))

  router.push('/')
}
</script>

<template>
  <h2 class="fw-bold mb-4">Tạo bài viết</h2>

  <div class="card p-4 col-md-8">
    <input
      type="file"
      class="form-control mb-3"
      accept="image/*"
      @change="handleImageChange"/>

    <img
      v-if="image"
      :src="image"
      class="img-fluid rounded mb-3"
      alt="Ảnh tiêu đề"/>

    <input class="form-control mb-3" placeholder="Tiêu đề bài viết" v-model="title"/>
    <textarea
      class="form-control mb-3" rows="6"placeholder="Nội dung bài viết" v-model="content">
    </textarea>

    <button class="btn btn-primary" @click="createPost">
      Đăng bài
    </button>
  </div>
</template>
