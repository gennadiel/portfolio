<template>
    <HeaderBar />
    <Gallery />
    <!-- <p class="animated-text">Сожалеем, галерея находится в стадий разработки</p> -->
    <PageFooter />
    <!-- Обязательно  -  ГАЛЕРЕЯ, в которой Несколько Папок  -  
    это "Рисунок", "Живопись ", "Смешанная техника", "Графика", "Акварель"... 
    ВЫСТАВКИ, -  Города, Статьи об Авторе, Статьи АВТОРА, ФОТО, ФОТО С ВЫСТАВОК, ВИДЕО, .. 
    Видео с выставок,.. Литература,... -->
</template>


<script>
import HeaderBar from '@/components/HeaderBar.vue';
import PageFooter from '@/components/Footer.vue';
import Gallery from '@/components/Gallery.vue'
export default {
    name: 'GalleryView',
    components: {
        HeaderBar, 
        PageFooter, 
        Gallery
    }
}
</script>


<style>
.animated-text {
  font-size: 30px;
  font-weight: bold;
  color: orangered;
  text-align: center;
  opacity: 0;
  transform: translateY(50px);
  animation: fadeInUp 1s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>