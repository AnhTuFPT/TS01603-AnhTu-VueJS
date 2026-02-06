<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const title = ref('')
const content = ref('')
const image = ref(null)

const postId = Number(route.params.id)

onMounted(() => {
  const posts = JSON.parse(localStorage.getItem('posts')) || []
  const post = posts.find(p => p.id === postId)

  if (!post) {
    alert('Bài viết không tồn tại')
    router.push('/')
    return
  }

  title.value = post.title
  content.value = post.content
  image.value = post.image
})

const handleImageChange = (e) => {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    image.value = reader.result
  }
  reader.readAsDataURL(file)
}

const updatePost = () => {
  const posts = JSON.parse(localStorage.getItem('posts')) || []
  const index = posts.findIndex(p => p.id === postId)

  if (index === -1) return

  posts[index] = {
    ...posts[index],
    title: title.value,
    content: content.value,
    image: image.value,
  }

  localStorage.setItem('posts', JSON.stringify(posts))
  alert('Cập nhật bài viết thành công')
  router.push('/')
}
</script>

<template>
  <h2 class="fw-bold mb-4">Chỉnh sửa bài viết</h2>
  <div class="card p-4 col-md-8">
    <input type="file" class="form-control mb-3" accept="image/*" @change="handleImageChange"/>

    <img v-if="image" :src="image" class="img-fluid rounded mb-3" alt="Ảnh bài viết"/>

    <input class="form-control mb-3" placeholder="Tiêu đề bài viết" v-model="title"/>

    <textarea class="form-control mb-3" rows="6" placeholder="Nội dung bài viết" v-model="content"></textarea>

    <div class="d-flex gap-2">
      <button class="btn btn-primary" @click="updatePost">Lưu thay đổi</button>

      <RouterLink to="/" class="btn btn-outline-secondary">Hủy</RouterLink>
    </div>
  </div>
</template>
