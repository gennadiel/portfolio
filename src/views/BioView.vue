<template>
  <HeaderBar />
  <!-- <div id="bio-body"> -->
    <p class="bio-text">Ельцо́в, Генна́дий Алексе́евич (родился 12 февраля 1959 г. в г.Кивиыли, Эстония) — известный
      эстонский художник. Член
      Ассоциации русских художников Парижа (с 2000 г.). Принят в Международный художественный фонд (1993).</p>
    <img src="../assets/young.jpg" alt="pic">
    <p class="bio-text">В 1976 году окончил среднюю школу в г.Кивиыли и художественную школу в г.Йыхви. В 1981 году
      окончил Ивановское
      художественное училище (ИХУ) в г. Иваново. Один из его первых учителей была эстонская художница <a
        href="http://https://dic.academic.ru/dic.nsf/ruwiki/208937" style="color: burlywood;">Леа Лившиц</a>. Работы
      художника находятся в частных коллекциях в разных странах мира.</p>

  <!-- </div> -->
  <PageFooter />
</template>

<script>
// @ is an alias to /src
import HeaderBar from '@/components/HeaderBar.vue';
import PageFooter from '@/components/Footer.vue';
export default {
  name: 'BioView',
  components: {
    HeaderBar, PageFooter
  }
}
</script>

<style scoped>
.bio-text {
  font-family: 'Miama';
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 50px;
  align-items: center;
  text-align: center;

  color: #FFFFFF;
  /* width: 100vw; */

  align-self: center;
  padding-top: 20px;
  padding-left: 15vw;
  padding-right: 15%;
}

img {
  width: 70%;
  align-self: center;
  border-radius: 8px;
}
#bio-body {
  max-width: 100vw;
}
</style>