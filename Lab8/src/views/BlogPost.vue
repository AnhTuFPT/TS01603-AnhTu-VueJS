<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <div class="card shadow">
    <div class="card-body">
      <h4>Blog Post ID: {{ route.params.id }}</h4>
      <p>Nội dung bài viết số {{ route.params.id }}...</p>
    </div>
  </div>
</template>