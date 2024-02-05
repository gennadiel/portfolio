<template>
  <HeaderBar />
  <img src="@/assets/gen.jpg" alt="Gennadi">
  <PageFooter />
</template>

<script>
// @ is an alias to /src
import HeaderBar from '@/components/HeaderBar.vue';
import PageFooter from '@/components/Footer.vue';
export default {
  name: 'HomeView',
  components: {
    HeaderBar, PageFooter
  }
}
</script>

<style scoped>
img{
  width: 70%;
  align-self: center;
  border-radius: 8px;
}
</style>
