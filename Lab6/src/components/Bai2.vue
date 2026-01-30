<template>
  <div class="p-4 border rounded mb-4">
    <h3>Bài 2</h3>
    <input type="number" class="form-control w-50" v-model.number="month" placeholder=""/>
    
    <p v-if="month < 1 || month > 12" class="text-danger mt-3"> Vui lòng nhập tháng từ 1 đến 12! </p>

    <p v-else-if="[1,2,3].includes(month)" class="mt-3">Mùa Xuân</p>
    <p v-else-if="[4,5,6].includes(month)">Mùa Hạ</p>
    <p v-else-if="[7,8,9].includes(month)">Mùa Thu</p>
    <p v-else>Mùa Đông</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const month = ref(null)
</script>

<style>
</style>