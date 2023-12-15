<template>
    <div id="linksbar">
        <!-- <a href="/pages/bio.html"> -->
            <div class="link" @click="$router.push('/bio')">
                <p>Биография</p>
            </div>
        <!-- </a> -->
        <!-- <a href="/pages/publications.html"> -->
            <div class="link" @click="$router.push('/publications')">
                <p>Статьи</p>
            </div>
        <!-- </a> -->
        <!-- <a href="/pages/gallery.html"> -->
            <div class="link" @click="$router.push('/gallery')">
                <p>Галерея</p>
            </div>
        <!-- </a> -->
        <div class="link" v-if="isLogged" @click="logOut">
            <p>Выйти</p>
        </div>
        <!-- <div class="link" v-if="!isLogged" @click="logIn">
            <p>Войти</p>
        </div> -->
    </div>
</template>

<script>
import { getAuth } from "firebase/auth";
export default {
    name: 'LinksBar',
    data() {
        return {}
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
    },
}
</script>

<style>
#linksbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    flex-wrap: wrap;
    margin-right: 10%;
}

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
