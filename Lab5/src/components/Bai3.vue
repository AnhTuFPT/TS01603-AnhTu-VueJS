<script setup>
import { reactive } from 'vue'
// Đối tượng thông tin cá nhân
const userInfo = reactive({
  name: '',
  age: '',
  email: ''
})
</script>
<template>
  <div class="box">
    <h2>Bài 3</h2>

    <!-- Form nhập liệu -->
    <div class="form-group">
      <label>Họ và tên:</label>
      <input
        type="text"
        v-model="userInfo.name"
        placeholder="Nhập họ và tên"
      />
    </div>

    <div class="form-group">
      <label>Tuổi:</label>
      <input
        type="number"
        v-model="userInfo.age"
        placeholder="Nhập tuổi"
      />
    </div>

    <div class="form-group">
      <label>Email:</label>
      <input
        type="email"
        v-model="userInfo.email"
        placeholder="Nhập email"
      />
    </div>

    <hr />

    <!-- Hiển thị thông tin ngay khi nhập -->
    <div class="info">
      <h3>Thông tin đã nhập:</h3>
      <p><b>Họ và tên:</b> {{ userInfo.name }}</p>
      <p><b>Tuổi:</b> {{ userInfo.age }}</p>
      <p><b>Email:</b> {{ userInfo.email }}</p>
    </div>
  </div>
</template>

<style scoped>
.box {
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 20px;
}
.form-group {
  margin-bottom: 10px;
}
input {
  width: 100%;
  padding: 6px;
}
.info {
  background: #000000;
  padding: 10px;
}
</style>
