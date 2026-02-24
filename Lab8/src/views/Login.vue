<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const username = ref("");
const password = ref("");

const login = () => {
  if (username.value === "anhtu" && password.value === "123") {
    localStorage.setItem("auth", "true");
    router.push("/dashboard");
  } else {
    alert("Sai tài khoản hoặc mật khẩu");
  }
};
</script>

<template>
  <div class="card shadow mx-auto" style="max-width:400px">
    <div class="card-body">
      <h4 class="text-center mb-3">Login</h4>

      <input v-model="username" class="form-control mb-2" placeholder="Username">
      <input v-model="password" type="password" class="form-control mb-3" placeholder="Password">

      <button class="btn btn-primary w-100" @click="login">
        Login
      </button>
    </div>
  </div>
</template>