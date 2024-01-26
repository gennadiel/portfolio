
<template>
    <div id="footer">
        <p><span @click="moveToLogin">&copy;</span> 2023 Геннадий Ельцов <a href="https://www.facebook.com/profile.php?id=100001888112088&locale=ru_RU" target=”_blank”><img src="../assets/fb.png" alt="fb"></a></p>
        
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


<style scoped>
#footer {
    /* Set the minimum height to cover the entire viewport excluding the footer */
    min-height: calc(100vh - 10%);
    /* Adjust the value based on your footer height */

    /* Flex container to allow footer positioning */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
#footer img{
   /* size: 10px; */
   width: 20px;
   height: 20px;
   padding-left: 30px;
}
</style>

