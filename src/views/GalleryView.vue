<template>
    <HeaderBar />
    <Gallery />
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
        HeaderBar, PageFooter, Gallery
    }
}
</script>


<style></style>