<template>
  <HeaderBar />
  <img src="@/assets/db3d9be2aa47a14930d6c487c4e4c706.jpg" alt="2024">
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
