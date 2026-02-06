<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// ===== FORM DATA =====
const fullname = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const avatar = ref(
  new URL('../assets/image/avatar_1.jpg', import.meta.url).href
)

const error = ref('')

const avatarInput = ref(null)

const openAvatarPicker = () => {
  avatarInput.value.click()
}

const handleAvatarChange = (e) => {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    avatar.value = reader.result
  }
  reader.readAsDataURL(file)
}

const register = () => {
  if (!fullname.value || !email.value || !password.value) {
    error.value = 'Vui lòng nhập đầy đủ thông tin'
    return
  }

  if (password.value !== confirmPassword.value) {
    error.value = 'Mật khẩu nhập lại không khớp'
    return
  }

  const users = JSON.parse(localStorage.getItem('users')) || []

  const exists = users.find(u => u.email === email.value)
  if (exists) {
    error.value = 'Email đã tồn tại'
    return
  }

  const newUser = {
    id: Date.now(),
    fullname: fullname.value,
    email: email.value,
    password: password.value,
    avatar: avatar.value
  }

  users.push(newUser)
  localStorage.setItem('users', JSON.stringify(users))

  error.value = ''
  alert('Đăng ký thành công')
  router.push('/login')
}
</script>

<template>
  <h2 class="fw-bold mb-4">Đăng ký</h2>

  <div class="card p-4 col-md-5">

    <div class="text-center mb-4">
      <img :src="avatar" class="avatar-img mb-2" alt="Avatar"/><br/>

      <button type="button" class="btn btn-outline-primary btn-sm" @click="openAvatarPicker">Chọn ảnh đại diện</button>

      <input type="file" ref="avatarInput" class="d-none" accept="image/*" @change="handleAvatarChange"/>
    </div>

    <input class="form-control mb-3" placeholder="Họ và tên" v-model="fullname"/>

    <input class="form-control mb-3" placeholder="Email" v-model="email"/>

    <input type="password" class="form-control mb-3" placeholder="Mật khẩu" v-model="password"/>

    <input type="password" class="form-control mb-4" placeholder="Nhập lại mật khẩu" v-model="confirmPassword"/>

    <p v-if="error" class="text-danger mb-3">{{ error }}</p>

    <button class="btn btn-success w-100" @click="register">Đăng ký</button>
  </div>
</template>
