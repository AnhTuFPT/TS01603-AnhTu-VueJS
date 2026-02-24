<template>
  <div>
    <h3>Blog List</h3>

    <div class="list-group">
      <router-link
        v-for="id in 5"
        :key="id"
        :to="{ name: 'BlogPost', params: { id } }"
        class="list-group-item list-group-item-action"
      >
        Blog Post {{ id }}
      </router-link>
    </div>
  </div>
</template>