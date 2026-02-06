<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const currentUser = ref(null)


const loadUser = () => {
  currentUser.value = JSON.parse(localStorage.getItem('currentUser'))
}

loadUser()

watch(
  () => route.fullPath,
  () => {
    loadUser()
  }
)


const logout = () => {
  localStorage.removeItem('currentUser')
  currentUser.value = null
  router.push('/login')
}
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">Cafe Stories</RouterLink>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="menu">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Trang chủ</RouterLink>
          </li>

          <li class="nav-item" v-if="currentUser">
            <RouterLink class="nav-link" to="/posts/create">Tạo bài viết</RouterLink>
          </li>

          <li class="nav-item" v-if="currentUser">
            <RouterLink class="nav-link" to="/profile">Trang cá nhân</RouterLink>
          </li>
        </ul>


        <ul class="navbar-nav ms-auto">
          <template v-if="!currentUser">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/login">Đăng nhập</RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink class="btn btn-primary ms-2" to="/register">Đăng ký</RouterLink>
            </li>
          </template>

      
          <template v-else>
            <li class="nav-item d-flex align-items-center me-2">
              <span class="text-muted fw-semibold">{{ currentUser.fullname }}</span>
            </li>

            <li class="nav-item">
              <button class="btn btn-outline-danger btn-sm" @click="logout">Đăng xuất</button>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>
