<script setup>
import { ref, computed } from 'vue'

const year = ref(null)
const currentYear = new Date().getFullYear()

const age = computed(() => {
  if (!year.value) return 0
  return currentYear - year.value
})

const category = computed(() => {
  if (age.value <= 10) return 'Trẻ em'
  if (age.value <= 20) return 'Thiếu niên'
  if (age.value <= 30) return 'Thanh niên'
  if (age.value <= 40) return 'Trung niên'
  return 'Lớn tuổi'
})
</script>

<template>
  <div style="padding: 20px">
    <h2>Nhập năm sinh:</h2>

    <input
      type="number"
      v-model="year"
      min="1900"
      :max="currentYear"
      placeholder="VD: 2000"
    />

    <div v-if="year">
      <p>Năm sinh: {{ year }}</p>
      <p>Tuổi: {{ age }}</p>
      <p><strong>{{ category }}</strong></p>
    </div>
  </div>
</template>
