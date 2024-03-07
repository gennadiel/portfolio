<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>

<style>
#app {
  background-image: url('assets/bg.jpg');
  background-size: cover;
  
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* Set the minimum height to cover the entire viewport */
  min-height: 100vh;
  min-width: 100vw;
  /* min-width: 100%; */
  /* margin: 0px !important; */
}
</style>
