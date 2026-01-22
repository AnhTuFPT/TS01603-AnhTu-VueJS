<template>
  <h2 class="fw-bold mb-4">Trang cá nhân</h2>

  <div class="card p-4 col-md-6">
    <div class="d-flex align-items-center">
      <img
        :src="avatar"
        class="rounded-circle me-4 avatar-img"
        width="100"
        height="100"
        alt="Avatar"
      />

      <div>
        <h5 class="mb-1">{{ name }}</h5>
        <p class="text-muted mb-2">{{ email }}</p>

        <RouterLink
          to="/profile/edit"
          class="btn btn-outline-primary btn-sm"
        >
          Chỉnh sửa thông tin
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('Anh Tú')
const email = ref('anhtu@gmail.com')

const avatar = ref(
  new URL('../assets/image/meomeo.jpg', import.meta.url).href
)
</script>
