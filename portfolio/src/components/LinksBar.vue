<template>
    <div id="linksbar">
        <div class="link" @click="$router.push('/bio')">
            <p>Биография</p>
        </div>
        <div class="link" @click="$router.push('/publications')">
            <p>Статьи</p>
        </div>
        <div class="link" @click="$router.push('/gallery')">
            <p>Галерея</p> 
        </div>
        <!-- <div class="link" @mouseenter="showGallery" @mouseleave="hideGallery">
            <p>Галерея</p> 
            <div v-if="isGalleryVisible" id="gallerylinks">
                
                <router-link :to="/gallery/subpage1">Подстраница 1</router-link>
                <router-link :to="/gallery/subpage2">Подстраница 2</router-link>
                
            </div>
        </div> -->
        <div class="link" v-if="isLogged" @click="logOut">
            <p>Выйти</p>
        </div>
    </div>
</template>

<script>
import { getAuth } from "firebase/auth";
export default {
    name: 'LinksBar',
    data() {
        return {
            isGalleryVisible: false,
            activeLink: null,
        }
    },
    computed: {
        isLogged() {
            return this.$store.getters.isLogged;
        },
    },
    methods: {
        logIn() {
            this.$router.push('/login')
        },
        showGallery() {
            this.isGalleryVisible = true;
        },
        hideGallery() {
            this.isGalleryVisible = false;
        },
        async logOut() {
            const auth = getAuth();
            console.log(auth);
            await auth.signOut();
            // .then((p) => {
            //     console.log(p);
            //     }
            // )
            this.$store.dispatch('logOut');
            this.$router.push('/');
        },
        handleClick(link) {
            this.activeLink = link;
        },
    },
}
</script>

<style scoped>
#links-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 10%;
}

#linksbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    flex-wrap: wrap;
    margin-right: 10%;
}


    /* #gallerylinks {
  margin-top: 20px; /* Расстояние между linksbar и gallerylinks 
  /* Другие стили для gallerylinks 
} */


.link {
    font-family: 'Exo 2', sans-serif;
    font-size: large;
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
}

.link:hover {
    color: orange;
    transition: 1s;
    text-decoration: overline;
}

.link {
    color: black;
    font-weight: bold;
    text-decoration: none;
}
</style>
