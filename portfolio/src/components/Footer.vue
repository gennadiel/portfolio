
<template>
    <div id="footer">
        <p><span @click="moveToLogin">&copy;</span> 2023 Геннадий Ельцов</p>
    </div>
</template>


<script>
export default {
    name: 'PageFooter',
    components: {

    },
    methods:{
        moveToLogin(){
            this.$router.push('/login')
        }
    }
}
</script>


<style>
#footer {
    /* Set the minimum height to cover the entire viewport excluding the footer */
    min-height: calc(100vh - 10%);
    /* Adjust the value based on your footer height */

    /* Flex container to allow footer positioning */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
</style>

