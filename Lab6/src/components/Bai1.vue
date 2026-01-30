<template>
  <div class="p-4 border rounded mb-4">
    <h3>Bài 1</h3>

    <input type="number" class="form-control w-50" v-model.number="dtb" placeholder=""/>

    <p class="mt-3 fw-bold" v-if="dtb < 5">Xếp loại: Yếu</p>
    <p class="mt-3 fw-bold" v-else-if="dtb < 6.5">Xếp loại: Trung bình</p>
    <p class="mt-3 fw-bold" v-else-if="dtb < 8">Xếp loại: Khá</p>
    <p class="mt-3 fw-bold" v-else-if="dtb < 9">Xếp loại: Giỏi</p>
    <p class="mt-3 fw-bold" v-else>Xếp loại: Xuất sắc</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const dtb = ref(0)
</script>
