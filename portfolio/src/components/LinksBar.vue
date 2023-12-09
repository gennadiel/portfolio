<template>
    <div id="linksbar">
        <a href="/pages/bio.html">
            <div id="home">
                <p>Биография</p>
            </div>
        </a>
        <a href="/pages/publications.html">
            <div id="home">
                <p>Статьи</p>
            </div>
        </a>
        <a href="/pages/gallery.html">
            <div id="home">
                <p>Галерея</p>
            </div>
        </a>
    </div>
</template>


<script>
export default {
    name: 'LinksBar',
    components: {

    }
}
</script>


<style>
#linksbar {
    /* display: flex;
    flex-direction: row; */

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;


    flex-wrap: wrap;
    margin-right: 10%;
}

#linksbar a {
    font-family: 'Exo 2', sans-serif;
    font-size: large;
    margin-left: 20px;
    margin-right: 20px;
    /* cursor: none; */
}

#linksbar a :hover {
    /* font-size: larger; */
    color: orange;
    transition: 1s;
    text-decoration: overline;
    /* text-decoration: underline; */
    /* cursor: none; */
}

a {
    color: black;
    font-weight: bold;
    text-decoration: none;
}
</style>