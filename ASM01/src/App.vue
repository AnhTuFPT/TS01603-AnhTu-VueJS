<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="app-wrapper">
    <Header />

    <main class="container my-4 flex-fill">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>
