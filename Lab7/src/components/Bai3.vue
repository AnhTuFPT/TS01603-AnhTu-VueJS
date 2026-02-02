<template>
  <div class="container mt-5">
    <div class="row">

     
      <div class="col-sm-6 card p-4">
        <h3>Bài 3</h3>
        <h3 class="mb-3">Form Đăng Ký</h3>

        <div class="mb-3">
          <label>Họ tên:</label>
          <input type="text" class="form-control" v-model="user.name"/>
        </div>

        <div class="mb-3">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="user.email"/>
        </div>

        <div class="mb-3">
          <label>Mật khẩu:</label>
          <input type="password" class="form-control" v-model="user.password"/>
        </div>

        <div class="mb-3">
          <label>Ngày sinh:</label>
          <input type="date" class="form-control" v-model="user.birth"/>
        </div>


        <div class="mb-3">
          <label>Giới tính:</label><br />
          <input type="radio" value="Nam" v-model="user.gender"/> Nam
          <input type="radio" value="Nữ" v-model="user.gender" class="ms-3"/> Nữ
          <input type="radio" value="Khác" v-model="user.gender" class="ms-3"/> Khác
        </div>


        <div class="mb-3">
          <label>Ngôn ngữ:</label><br />
          <input type="checkbox" value="Tiếng Việt" v-model="user.languages"/> Tiếng Việt
          <input type="checkbox" value="Tiếng Anh" v-model="user.languages" class="ms-3" /> Tiếng Anh
          <input type="checkbox" value="Tiếng Nhật" v-model="user.languages" class="ms-3"/> Tiếng Nhật
        </div>


        <button class="btn btn-primary" @click="submitted = true">Đăng ký</button>
      </div>

<!-- ---------------------------------------------------------------- -->
      <div class="col-sm-6 card p-4">
        <h3 class="mb-3">Thông tin đã đăng ký:</h3>

        <div v-if="submitted">
          <p><b>Họ tên:</b> {{ user.name }}</p>
          <p><b>Email:</b> {{ user.email }}</p>
          <p><b>Ngày sinh:</b> {{ user.birth }}</p>
          <p><b>Giới tính:</b> {{ user.gender }}</p>
          <p><b>Ngôn ngữ:</b>{{ user.languages.join(', ') }}
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const submitted = ref(false)

const user = ref({
  name: '',
  email: '',
  password: '',
  birth: '',
  gender: '',
  languages: []
})
</script>
