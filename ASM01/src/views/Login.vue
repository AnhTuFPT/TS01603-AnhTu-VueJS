<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()


const email = ref('')
const password = ref('')
const error = ref('')


const login = () => {
  if (!email.value || !password.value) {
    error.value = 'Vui lòng nhập đầy đủ email và mật khẩu'
    return
  }

  const users = JSON.parse(localStorage.getItem('users')) || []

  const user = users.find(
    u => u.email === email.value && u.password === password.value
  )

  if (!user) {
    error.value = 'Email hoặc mật khẩu không đúng'
    return
  }


  localStorage.setItem('currentUser', JSON.stringify(user))

  error.value = ''
  router.push('/')
}
</script>

<template>
  <h2 class="fw-bold mb-4">Đăng nhập</h2>
  <div class="card p-4 col-md-5">


    <input class="form-control mb-3" placeholder="Email" v-model="email"/>

    <input type="password" class="form-control mb-3" placeholder="Mật khẩu" v-model="password"/>

  
    <p v-if="error" class="text-danger mb-3">{{ error }}</p>

    <button class="btn btn-primary w-100" @click="login">Đăng nhập</button>

  </div>
</template>
