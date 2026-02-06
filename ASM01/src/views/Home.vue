<script setup>
import { ref, onMounted } from 'vue'

const posts = ref([])


const currentUser = ref(null)

onMounted(() => {

  currentUser.value = JSON.parse(localStorage.getItem('currentUser'))


  const users = JSON.parse(localStorage.getItem('users')) || []

  if (users.length === 0) {
    const defaultUser = {
      id: 1,
      fullname: 'Anh Tú',
      email: 'anhtu@gmail.com',
      password: '1234',
      avatar: new URL('../assets/image/meomeo.jpg', import.meta.url).href
    }
    localStorage.setItem('users', JSON.stringify([defaultUser]))
  }


  const savedPosts = JSON.parse(localStorage.getItem('posts')) || []

  if (savedPosts.length === 0) {
const demoPosts = [
  {
    id: 1,
    title: 'Cafe sáng – khoảnh khắc bắt đầu ngày mới',
    content:
      'Một buổi sáng yên tĩnh với ly cafe ấm, vài phút suy nghĩ cho bản thân giúp tinh thần nhẹ nhàng và tập trung hơn cho cả ngày dài.',
    image: new URL('../assets/image/anh-cafe-1.jpg', import.meta.url).href,
    author: 'Anh Tú',
    authorEmail: 'anhtu@gmail.com',
    createdAt: '29/01/2026'
  },
  {
    id: 2,
    title: 'Hương thơm và ký ức',
    content:
      'Mỗi mùi hương đều gắn liền với một kỷ niệm. Một chút nước hoa dịu nhẹ giúp ta tự tin hơn và lưu giữ những khoảnh khắc đáng nhớ.',
    image: new URL('../assets/image/MuiHuongVaKyuc.png', import.meta.url).href,
    author: 'Anh Tú',
    authorEmail: 'anhtu@gmail.com',
    createdAt: '20/01/2026'
  },
  {
    id: 3,
    title: 'Sống chậm giữa thành phố',
    content:
      'Giữa nhịp sống vội vã, đôi khi chỉ cần ngồi lại, nhâm nhi ly cafe và quan sát mọi thứ xung quanh cũng đủ để cân bằng cảm xúc.',
    image: new URL('../assets/image/song-cham.jpg', import.meta.url).href,
    author: 'Anh Tú',
    authorEmail: 'anhtu@gmail.com',
    createdAt: '04/02/2026'
  }
]

    localStorage.setItem('posts', JSON.stringify(demoPosts))
    posts.value = demoPosts
  } else {
    posts.value = savedPosts
  }
})



const deletePost = (id) => {
  if (!confirm('Bạn có chắc muốn xóa bài viết này?')) return
  posts.value = posts.value.filter(p => p.id !== id)
  localStorage.setItem('posts', JSON.stringify(posts.value))
}
</script>

<template>
  <div class="d-flex justify-content-between align-items-center mb-4">
    <div>
      <h2 class="fw-bold">Trang chủ</h2>
      <p class="text-muted mb-0">Danh sách bài viết</p>
    </div>

    <RouterLink v-if="currentUser" to="/posts/create" class="btn btn-primary">+ Tạo bài viết</RouterLink>
  </div>

  <div class="row">
    <div class="col-md-4 mb-4" v-for="post in posts" :key="post.id">
      <div class="card h-100 p-3">

     
        <img v-if="post.image" :src="post.image" class="img-fluid rounded mb-3" alt="Ảnh bài viết"/>

        <h5 class="fw-bold">{{ post.title }}</h5>

        <p class="text-muted">{{ post.content }}</p>

        <div class="text-muted small mb-3">
          Tác giả: {{ post.author }} <br />
          Ngày đăng: {{ post.createdAt }}
        </div>


        <div class="d-flex gap-2">
          <RouterLink :to="`/posts/${post.id}`" class="btn btn-outline-primary btn-sm">Xem chi tiết</RouterLink>


          <template v-if="currentUser && currentUser.email === post.authorEmail">
            <RouterLink :to="`/posts/edit/${post.id}`" class="btn btn-outline-secondary btn-sm">Sửa</RouterLink>

            <button class="btn btn-outline-danger btn-sm" @click="deletePost(post.id)">Xóa</button>
          </template>
        </div>
      </div>
    </div>

    <div v-if="posts.length === 0"class="text-center text-muted mt-5">Chưa có bài viết nào. Hãy tạo bài viết đầu tiên.</div>
  </div>
</template>
