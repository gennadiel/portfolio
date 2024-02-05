<template>
  <HeaderBar />
  <ul>
    <!-- <li>
      <a href="" class="link" target="_blank">
        
      </a>
    </li> -->
    <li>
      <a href="https://tribuna.ee/tribuna/culture/gennadi-jeltsov/" class="link" target="_blank">
        Геннадий Ельцов: В мире много противоречий, которые
        в своём творчестве может отразить художник
      </a>
    </li>
    <li>
      <a href="https://severnojepoberezhje.postimees.ee/term/584983/gennadiy-elcov" class="link" target="_blank">
        Статьи в северном побережье
      </a>
    </li>
    <li>
      <a href="https://priisk.org/content/iz-masterskoj-gennadiya-elcova/" class="link" target="_blank">
        Из мастерской Геннадия Ельцова
      </a>
    </li>
    <li>
      <a href="https://r4.err.ee/918254/people-to-people/933996" class="link" target="_blank">
        Подкаст на радио 4 (16.03.2019)
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