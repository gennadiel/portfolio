import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import GalleryView from '@/views/GalleryView'
import PublicationsView from '@/views/PublicationsView'
import BioView from '@/views/BioView'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { store } from '@/main.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView
  },
  {
    path: '/publications',
    name: 'publications',
    component: PublicationsView
  },
  {
    path: '/bio',
    name: 'bio',
    component: BioView
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// router.
router.beforeEach(function () {
  console.log('page changed');
  const auth = getAuth();
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log('IN');
      console.log(user.email);
      store.dispatch('logIn');
    } else {
      console.log('OUT');
      store.dispatch('logOut');
    }
  })
});

export default router
