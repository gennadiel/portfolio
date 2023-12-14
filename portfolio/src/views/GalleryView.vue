<template>
    <HeaderBar />
    <Gallery />
    <PageFooter />
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