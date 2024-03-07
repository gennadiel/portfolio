<template>
    <div id="linksbar">
        <!-- <div class="link" @click="$router.push('/gallery')">
            <p>Галерея</p>
        </div> -->

        <!-- <div class="link" @click="showGallery"><p>Галерея</p></div> -->

        <!-- <ul v-if="isGalleryVisible">
                <li>Элемент 1</li>
                <li>Элемент 2</li>
                <li>Элемент 3</li>
            </ul> -->

        <!-- <div> -->
        <div @click="$router.push('/bio')" id="bio">
            <img src="@/assets/bio.png" class="img">
        </div>
        <!-- <div class="link" @click="$router.push('/publications')">
            <img src="@/assets/gallery.png" id="logo">
        </div> -->
        <div id="news" @click="$router.push('/publications')">
            <img src="@/assets/news.png" class="img">
        </div>
        <!-- </div> -->

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
    <!-- </div> -->
</template>

<script>
import { getAuth } from "firebase/auth";
export default {
    name: 'LinksBar',
    data() {
        return {
            // isDropdownVisible: false,
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
            this.isGalleryVisible = !this.isGalleryVisible;
        },
        // hideGallery() {
        //     this.isGalleryVisible = false;
        // },
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

<style>
.img {
    width: 40px;
    height: 40px;
    /* margin: 30px; */
    cursor: pointer;
}

.img:hover {
    animation-duration: 1s;
    animation-name: largener;
    animation-fill-mode: both;
}

@keyframes largener {
    from {
        transform: scale(100%);
    }

    to {
        transform: scale(130%);
    }
}

#linksbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* margin: 30px; */
}


/* #gallerylinks {
  margin-top: 20px; /* Расстояние между linksbar и gallerylinks 
  /* Другие стили для gallerylinks 
} */


/* .link {
    font-family: 'Exo 2', sans-serif;
    font-size: large;
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
    size: 100px;
}

.link:hover {
    color: orange;
    transition: 1s;
    text-decoration: overline;
} */

/* .link {
    color: black;
    font-weight: bold;
    text-decoration: none;
} */
#bio {
    /* position: absolute;
    left: 16.11%;
    right: 76.94%;
    top: 0%;
    bottom: 0%; */
    /* width: 100px;
height: 100px; */

    margin: 0px;
}

#news {
    /* position: absolute;
    left: 30%;
    right: 63.06%;
    top: 0%;
    bottom: 0%;
    width: 40px;
    height: 40px; */
    /* margin: 30px; */
}
</style>
/* Headbar */

position: relative;
width: 1440px;
height: 100px;



/* bio */

position: absolute;
left: 16.11%;
right: 76.94%;
top: 0%;
bottom: 0%;



/* Vector */

position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;



/* Vector */

position: absolute;
left: 13%;
right: 13%;
top: 13%;
bottom: 13%;

background: #FFFFFF;


/* gallery */

position: absolute;
left: 23.06%;
right: 70%;
top: -2%;
bottom: 2%;



/* Vector */

position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;



/* Vector */

position: absolute;
left: 12%;
right: 13%;
top: 13%;
bottom: 12%;

background: #FFFFFF;


/* home */

position: absolute;
left: 2.08%;
right: 90.97%;
top: 0%;
bottom: 0%;



/* Vector */

position: absolute;
left: 0%;
right: 0%;
top: -2%;
bottom: 2%;



/* Vector */

position: absolute;
left: 8%;
right: 8.67%;
top: 13%;
bottom: 16.17%;

background: #FFFFFF;


/* News */

position: absolute;
left: 30%;
right: 63.06%;
top: -2%;
bottom: 2%;



/* Vector */

position: absolute;
left: 8.33%;
right: 8.33%;
top: 12.5%;
bottom: 12.5%;

background: #FFFFFF;
