<template>
  <div class="container mt-5">
    <div class="row">
    <!-- Form -->
      <form class="col-sm-4" @submit.prevent="submitForm">

        <h3 class="text-success mb-3"> {{ isEditing ? 'Cập nhật học sinh' : 'Thêm học sinh' }} </h3>
        
        <div class="mb-3">
          <label class="form-label">Họ tên</label>
          <input type="text" class="form-control" v-model="student.name" required />
        </div>

        <div class="mb-3">
          <label class="form-label">Điểm</label>
          <input type="number" class="form-control" v-model.number="student.score" min="0" max="10" required />
        </div>

        <div class="mb-3">
          <label class="form-label">Ngày sinh</label>
          <input type="date" class="form-control" v-model="student.dob" required />
        </div>

        <button type="submit" class="btn" :class="isEditing ? 'btn-warning' : 'btn-success'">
          {{ isEditing ? 'Cập nhật' : 'Thêm' }}
        </button>

        <button v-if="isEditing" type="button" class="btn btn-secondary ms-2" @click="resetForm">
          Hủy
        </button>
      </form>
      <!-- Danh sách -->
      <div class="col-sm-8">
        <h3 class="text-danger mb-3">Danh sách học sinh</h3>

        <table class="table table-hover">
          <thead>
            <tr>
              <th>Họ và tên</th>
              <th>Điểm</th>
              <th>Ngày sinh</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(stu, index) in students" :key="index">
              <td>{{ stu.name }}</td>
              <td>{{ stu.score }}</td>
              <td>{{ stu.dob }}</td>
              <td>
                <button class="btn btn-warning btn-sm" @click="editStudent(index)">
                  Sửa
                </button>
              </td>
              <td>
                <button class="btn btn-danger btn-sm" @click="deleteStudent(index)">
                  Xóa
                </button>
              </td>
            </tr>

            <tr v-if="students.length === 0">
              <td colspan="5" class="text-center text-muted">
                Chưa có học sinh nào
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const students = ref([
  { name: 'Nguyễn Chí Hùng', score: 8, dob: '2006-01-01' },
  { name: 'Phạm Thị Lan', score: 9, dob: '2006-05-15' }
])

const student = ref({
  name: '',
  score: null,
  dob: ''
})

const isEditing = ref(false)
const editingIndex = ref(null)

const submitForm = () => {
  if (isEditing.value) {
    students.value[editingIndex.value] = { ...student.value }
    isEditing.value = false
    editingIndex.value = null
  } else {
    students.value.push({ ...student.value })
  }
  resetForm()
}

const editStudent = (index) => {
  student.value = { ...students.value[index] }
  isEditing.value = true
  editingIndex.value = index
}

const deleteStudent = (index) => {
  if (confirm('Bạn có chắc muốn xóa học sinh này không?')) {
    students.value.splice(index, 1)
  }
}

const resetForm = () => {
  student.value = {
    name: '',
    score: null,
    dob: ''
  }
  isEditing.value = false
  editingIndex.value = null
}
</script>
