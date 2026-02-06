<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const post = ref(null)
const currentUser = ref(null)
const commentText = ref('')

onMounted(() => {

  currentUser.value = JSON.parse(localStorage.getItem('currentUser'))

  const posts = JSON.parse(localStorage.getItem('posts')) || []
  const postId = Number(route.params.id)

  const foundPost = posts.find(p => p.id === postId)

  if (!foundPost) {
    alert('Bài viết không tồn tại')
    router.push('/')
    return
  }

  if (!foundPost.comments) {
    foundPost.comments = []
  }

  post.value = foundPost
})


const addComment = () => {
  if (!commentText.value.trim()) return

  const newComment = {
    user: currentUser.value.fullname,
    content: commentText.value,
    createdAt: new Date().toLocaleString()
  }

  post.value.comments.push(newComment)


  const posts = JSON.parse(localStorage.getItem('posts')) || []
  const index = posts.findIndex(p => p.id === post.value.id)
  posts[index] = post.value
  localStorage.setItem('posts', JSON.stringify(posts))

  commentText.value = ''
}
</script>

<template>
  <div v-if="post" class="col-md-8 mx-auto">
    <div class="card p-4">
      <img v-if="post.image" :src="post.image" class="img-fluid rounded mb-4" alt="Ảnh bài viết"/>

      <h2 class="fw-bold mb-3">{{ post.title }}</h2>

      <div class="text-muted mb-3">
        Tác giả: {{ post.author }} |
        Ngày đăng: {{ post.createdAt }}
      </div>

  
      <p class="fs-6">{{ post.content }}</p>

      <hr class="my-4" />

      <h5 class="fw-bold mb-3">Bình luận</h5>

      <div v-if="currentUser" class="mb-4">
        <textarea class="form-control mb-2" rows="3" placeholder="Nhập bình luận..." v-model="commentText"></textarea>

        <button class="btn btn-primary btn-sm" @click="addComment">Gửi bình luận</button>
      </div>

      <p v-else class="text-muted">Vui lòng đăng nhập để bình luận.</p>

      <div v-if="post.comments.length">
        <div v-for="(c, index) in post.comments" :key="index" class="border rounded p-2 mb-2">
          <strong>{{ c.user }}</strong>
          <span class="text-muted small">• {{ c.createdAt }}</span>
          <p class="mb-0">{{ c.content }}</p>
        </div>
      </div>

      <p v-else class="text-muted">Chưa có bình luận nào.</p>

      <RouterLink to="/" class="btn btn-outline-secondary mt-4">Quay lại trang chủ</RouterLink>
    </div>
  </div>
</template>
