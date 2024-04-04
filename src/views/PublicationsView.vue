<template>
  <HeaderBar />
  <ul>
    <!-- <li>
      <a href="" class="link" target="_blank">
        
      </a>
    </li> -->
    <li>
      <a href="https://tribuna.ee/tribuna/culture/gennadi-jeltsov/"  target="_blank">
        Геннадий Ельцов: В мире много противоречий, которые
        в своём творчестве может отразить художник
      </a>
    </li>
    <li>
      <a href="https://severnojepoberezhje.postimees.ee/term/584983/gennadiy-elcov"  target="_blank">
        Статьи в северном побережье
      </a>
    </li>
    <li>
      <a href="https://priisk.org/content/iz-masterskoj-gennadiya-elcova/"  target="_blank">
        Из мастерской Геннадия Ельцова
      </a>
    </li>
    <li>
      <a href="https://r4.err.ee/918254/people-to-people/933996"  target="_blank">
        Подкаст на радио 4 (16.03.2019)
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=5JdQqvbUxGA" target="_blank">
        Интервью, которое было записано во время открытия художественной выставки «Святыня» (видео)
      </a>
    </li>
  </ul>
  <PageFooter />
</template>
   
<script>
// @ is an alias to /src
import HeaderBar from '@/components/HeaderBar.vue';
import PageFooter from '@/components/Footer.vue';
export default {
  name: 'PublicationsView',
  components: {
    HeaderBar, PageFooter
  }
}
</script>

<style scoped>

li {
  color: white;
}

a {
  font-family: 'Kaisei Decol';
  font-style: oblique;
  font-weight: 400;
  font-size: 22px;
  line-height: 46px;
  color: white;
  margin:0;
  text-decoration: none
}
a:hover {
  
  color: rgb(31, 163, 48);
  
}
</style>