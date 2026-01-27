<script setup>
import { ref } from 'vue'
const message = ref('Thông điệp ban đầu')

const updateMessage = () => {
  message.value = 'Thông điệp đã được thay đổi!'
}
</script>

<template>
  <div class="box">
    <h2>Bài 1</h2>

    <p>{{ message }}</p>

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
