<template>
    <!-- LOGO -->
    <span id="logo" @click="$router.push('/')">Геннадий Ельцов</span>
</template>

<script>
export default {
    name: 'HeaderLogo',
}
</script>

<style>
#logo {
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    font-size: xx-large;
    padding: 20px;
    margin: 30px;
    border-style: solid;
    cursor: pointer;

    /* font-size: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh; */
}</style>