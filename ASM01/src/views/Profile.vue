<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const currentUser = ref(JSON.parse(localStorage.getItem('currentUser')))

if (!currentUser.value) {
  router.push('/login')
}
</script>

<template>
  <h2 class="fw-bold mb-4">Trang cá nhân</h2>

  <div class="card p-4 col-md-6">
    <div class="d-flex align-items-center">

      <img :src="currentUser.avatar" class="rounded-circle me-4 avatar-img" width="100" height="100" alt="Avatar"/>

      <div>
        <h5 class="mb-1">{{ currentUser.fullname }}</h5>

        <p class="text-muted mb-2">{{ currentUser.email }}</p>

        <RouterLink to="/profile/edit" class="btn btn-outline-primary btn-sm">Chỉnh sửa thông tin</RouterLink>
      </div>

    </div>
  </div>
</template>
