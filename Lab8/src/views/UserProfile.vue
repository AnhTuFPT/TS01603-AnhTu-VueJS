<template>
  <div class="card shadow">
    <div class="card-body">
      <h3>User Profile</h3>

      <router-link class="btn btn-info me-2" to="/profile/info">
        Info
      </router-link>

      <router-link class="btn btn-warning" to="/profile/settings">
        Settings
      </router-link>

      <hr>

      <router-view />
    </div>
  </div>
</template>