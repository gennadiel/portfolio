<template>
    <!-- LOGO -->
    <!-- <span id="logo" @click="$router.push('/')">Ельцов Геннадий</span> -->
    <div>
        <img id="home" src="@/assets/home.png" alt="logo" class="link" @click="$router.push('/')">
    </div>
</template>

<script>
export default {
    name: 'HeaderLogo',
}
</script>

<style>
.link {
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin: 0 !important;
    /* margin-left: 20px;
    margin-right: 0; */
}

.link:hover {
    animation-name: rotate;
    animation-duration: 2s;
    animation-fill-mode: both;
    /* Применяем анимацию только при наведении */
}

#home {
    margin-right: 30px !important;
}

@keyframes rotate {
    from {
        transform: rotate(360deg);
    }

    to {
        transform: rotate(0deg);
    }
}
</style>
