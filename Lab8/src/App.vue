<script setup>

</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand">LAB 8</a>

        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/blog">Blog</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/profile">Profile</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container mt-4">
      <router-view />
    </div>
  </div>
</template>

