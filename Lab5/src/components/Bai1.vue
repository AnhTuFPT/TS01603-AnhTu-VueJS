<script setup>
import { ref } from 'vue'

// Biến message có giá trị ban đầu
const message = ref('Thông điệp ban đầu')

// Hàm xử lý khi bấm nút
const updateMessage = () => {
  message.value = 'Thông điệp đã được thay đổi!'
}
</script>

<template>
  <div class="box">
    <h2>Bài 1</h2>

    <!-- Hiển thị message -->
    <p>{{ message }}</p>

    <!-- Nút bấm -->
    <button @click="updateMessage">
      Thay đổi thông điệp
    </button>
  </div>
</template>

<style scoped>
.box {
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 20px;
}
button {
  padding: 6px 12px;
  cursor: pointer;
}
</style>
