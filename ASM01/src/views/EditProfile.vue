<template>
  <h2 class="fw-bold mb-4">Chỉnh sửa thông tin cá nhân</h2>

  <div class="card p-4 edit-profile-card">
    <!-- Avarta -->
    <div class="text-center mb-4">
      <img
        :src="avatar"
        alt="Avatar"
        class="avatar-img mb-2"
      />

      <!-- input file -->
      <input
        type="file"
        ref="fileInput"
        class="d-none"
        accept="image/*"
        @change="handleAvatarChange"
      />

      <!-- nút đổi avatar -->
      <div class="mt-2">
        <button
          class="btn btn-outline-primary btn-sm btn-change-avatar"
          @click="openFilePicker"
        >
          Đổi ảnh đại diện
        </button>
      </div>
    </div>

    <!-- Họ tên -->
    <input
      class="form-control mb-3"
      v-model="name"
      placeholder="Họ và tên"
    />

    <!-- Email -->
    <input
      class="form-control mb-3"
      v-model="email"
      placeholder="Email"
    />

    <hr />

    <!-- Mật khẩu mói -->
    <input
      type="password"
      class="form-control mb-3"
      v-model="password"
      placeholder="Mật khẩu mới"
    />

    <!-- Nhập lại mật khẩu-->
    <input
      type="password"
      class="form-control mb-3"
      v-model="confirmPassword"
      placeholder="Nhập lại mật khẩu"
    />

    <!-- Thông báo lỗi -->
    <p v-if="error" class="text-danger mb-3">
      {{ error }}
    </p>

    <!-- Nút -->
    <div class="d-flex gap-2">
      <button class="btn btn-primary w-100" @click="saveProfile">
        Lưu thay đổi
      </button>

      <RouterLink to="/profile" class="btn btn-outline-secondary w-100">
        Hủy
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

/* Dữ liệu */
const name = ref('Anh Tú')
const email = ref('anhtu@gmail.com')
const avatar = ref(new URL('../assets/image/meomeo.jpg', import.meta.url).href)

const password = ref('')
const confirmPassword = ref('')
const error = ref('')

/* Avarta */
const fileInput = ref(null)

const openFilePicker = () => {
  fileInput.value.click()
}

const handleAvatarChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    avatar.value = URL.createObjectURL(file)
  }
}

/* Lưu Profile */
const saveProfile = () => {
  if (password.value || confirmPassword.value) {
    if (password.value !== confirmPassword.value) {
      error.value = 'Mật khẩu nhập lại không khớp'
      return
    }
  }

  error.value = ''
  alert('Lưu thông tin thành công!')
}
</script>
