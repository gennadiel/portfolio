<template>
    <HeaderBar />
    <LoginForm />
    <PageFooter />
  </template>
  
  <script>
  // @ is an alias to /src
  import HeaderBar from '@/components/HeaderBar.vue';
  import PageFooter from '@/components/Footer.vue';
  import LoginForm from '@/components/LoginForm.vue';
  export default {
    name: 'LoginView',
    components: {
      HeaderBar, PageFooter, LoginForm
    }
  }
  </script>
  