<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <!-- Logo -->
      <RouterLink class="navbar-brand" to="/">
        Cafe Stories
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="menu">
        <!-- Menu chính -->
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/" active-class="active">
              Trang chủ
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/posts/create" active-class="active">
              Tạo bài viết
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/profile" active-class="active">
              Trang cá nhân
            </RouterLink>
          </li>
        </ul>

        <!-- Nhóm đăng nhập / đăng ký -->
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/login">
              Đăng nhập
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="btn btn-primary ms-2" to="/register">
              Đăng ký
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
