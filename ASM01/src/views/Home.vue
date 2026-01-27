<script setup>
import { ref, onMounted } from 'vue'

const posts = ref([])

onMounted(() => {
  const savedPosts = JSON.parse(localStorage.getItem('posts')) || []

  if (savedPosts.length === 0) {
    const demoPosts = [
      {
        id: 1,
        title: "9 cách nâng cao kỹ năng sống",
        content:
          "Rèn luyện tư duy phản biện, quản lý cảm xúc, làm việc nhóm và quản lý thời gian giúp bạn sống hiệu quả hơn mỗi ngày.",
        image: new URL('../assets/image/ky-nang-song-1.webp', import.meta.url).href,
        author: "Trần Nam Anh",
        createdAt: "01/12/2026",
      },
      {
        id: 2,
        title: "Cách quản lý thời gian hiệu quả",
        content:
          "Lập kế hoạch rõ ràng, ưu tiên công việc quan trọng và hạn chế trì hoãn là chìa khóa của thành công.",
        image: new URL('../assets/image/kynangsong.jpg', import.meta.url).href,
        author: "Nguyễn Đình Quang",
        createdAt: "19/09/2026",
      },
      {
        id: 3,
        title: "Phát triển tư duy sáng tạo",
        content:
          "Sáng tạo không phải là năng khiếu mà là kỹ năng có thể rèn luyện thông qua thử nghiệm và học hỏi liên tục.",
        image: new URL('../assets/image/hoctap.webp', import.meta.url).href,
        author: "Lê Minh Hiếu",
        createdAt: "20/10/2026",
      },
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

    <RouterLink to="/posts/create" class="btn btn-primary">
      + Tạo bài viết
    </RouterLink>
  </div>

  <div class="card p-3 mb-4">
    <div class="row g-3">
      <div class="col-md-9">
        <input
          class="form-control"
          placeholder="Tìm kiếm theo tiêu đề"/>
      </div>
      <div class="col-md-3">
        <select class="form-select">
          <option>Lọc bài viết</option>
          <option>Mới nhất</option>
          <option>Cũ nhất</option>
        </select>
      </div>
    </div>
  </div>

  <div class="row">
    <div
      class="col-md-4 mb-4"
      v-for="post in posts"
      :key="post.id">
      <div class="card h-100 p-3">
        
        <img
          v-if="post.image"
          :src="post.image"
          class="img-fluid rounded mb-3"
          alt="Ảnh bài viết"/>

        <h5 class="fw-bold">{{ post.title }}</h5>

        <p class="text-muted">
          {{ post.content }}
        </p>

        <div class="text-muted small mb-3">
          Tác giả: {{ post.author }} <br />
          Ngày đăng: {{ post.createdAt }}
        </div>

        <div class="d-flex gap-2">
          <button class="btn btn-outline-primary btn-sm">
            Xem chi tiết
          </button>

          <button class="btn btn-outline-secondary btn-sm">
            Sửa
          </button>

          <button
            class="btn btn-outline-danger btn-sm"
            @click="deletePost(post.id)">
            Xóa
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
