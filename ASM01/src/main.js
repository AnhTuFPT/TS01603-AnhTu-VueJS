import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// =========================
// BOOTSTRAP
// =========================
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// =========================
// GLOBAL CSS
// =========================
import './assets/style.css'

// =========================
// ALWAYS START AS GUEST
// =========================
localStorage.removeItem('currentUser')

// =========================
// CREATE APP
// =========================
createApp(App)
  .use(router)
  .mount('#app')
