<script setup>
import { ref } from 'vue'
// Biến nhận dữ liệu từ input
const userInput = ref('')
</script>

<template>
  <div class="box">
    <h2>Bài 2</h2>
    <!-- Input dùng v-model -->
    <input
      v-model="userInput"
      placeholder="Nhập dữ liệu vào đây"/>
    <!-- Hiển thị giá trị realtime -->
    <p>Giá trị bạn nhập: {{ userInput }}</p>
  </div>
</template>

<style scoped>
.box {
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 20px;
}
input {
  padding: 6px;
  width: 100%;
  margin-bottom: 10px;
}
</style>
