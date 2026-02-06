import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import PostCreate from '../views/PostCreate.vue'
import Profile from '../views/Profile.vue'
import EditProfile from '../views/EditProfile.vue'
import EditPost from '../views/EditPost.vue' 
import PostDetail from '../views/PostDetail.vue' 

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/posts/create', component: PostCreate },
  { path: '/posts/edit/:id', component: EditPost },
  { path: '/posts/:id', component: PostDetail }, 
  { path: '/profile', component: Profile },
  { path: '/profile/edit', component: EditProfile },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
