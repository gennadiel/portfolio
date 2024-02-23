<template>
    <!-- LOGO -->
    <span id="logo" @click="$router.push('/')">Ельцов Геннадий</span>
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
}</style>