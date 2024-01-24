<template>
 
    <HeaderBar />
     <PageFooter />
   </template>
   
   <script>
   // @ is an alias to /src
   import HeaderBar from '@/components/HeaderBar.vue';
   import PageFooter from '@/components/Footer.vue';
   export default {
     name: 'PublicationsView',
     components: {
       HeaderBar, PageFooter
     }
   }
   </script>