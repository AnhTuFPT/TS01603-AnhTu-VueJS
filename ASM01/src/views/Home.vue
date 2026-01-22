<template>
  <div class="d-flex justify-content-between align-items-center mb-4">
    <div>
      <h2 class="fw-bold">Trang chủ</h2>
      <p class="text-muted mb-0">Danh sách bài viết</p>
    </div>

    <RouterLink to="/posts/create" class="btn btn-primary">
      + Tạo bài viết
    </RouterLink>
  </div>

  <div class="card p-3 mb-4">
    <div class="row g-3">
      <div class="col-md-9">
        <input class="form-control" placeholder="Tìm kiếm theo tiêu đề">
      </div>
      <div class="col-md-3">
        <select class="form-select">
          <option>Lọc bài viết</option>
          <option>Mới nhất</option>
          <option>Cũ nhất</option>
        </select>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-4 mb-4" v-for="i in 3" :key="i">
      <div class="card h-100 p-3">
        <h5 class="fw-bold">Tiêu đề bài viết {{ i }}</h5>
        <p class="text-muted">
          Mô tả ngắn nội dung bài viết để người đọc nắm sơ lược.
        </p>

        <div class="text-muted small mb-3">
          Tác giả: User <br>
          Ngày đăng: 01/01/2026
        </div>

        <div class="d-flex gap-2">
          <button class="btn btn-outline-primary btn-sm">Xem chi tiết</button>
          <button class="btn btn-outline-secondary btn-sm">Sửa</button>
          <button class="btn btn-outline-danger btn-sm">Xóa</button>
        </div>
      </div>
    </div>
  </div>
</template>
