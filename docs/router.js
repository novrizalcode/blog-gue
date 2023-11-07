import { createRouter, createWebHistory } from 'vue-router';
import Artikel from './articles/ArtikelDetail.vue'; // Gantilah dengan nama komponen yang sesuai

const routes = [
//   {
//     path: '/',
//     component: Artikel, // Komponen yang akan menangani rute utama
//   },
  {
    path: '/article/:id', // Rute untuk menampilkan artikel berdasarkan ID
    name: 'article',
    component: Artikel, // Komponen yang akan menampilkan artikel
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
