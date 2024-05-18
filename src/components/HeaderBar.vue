<template>
  <div id="headerbar">
    <HeaderLogo />
    <LinksBar />
  </div>

</template>

<script>
import HeaderLogo from "@/components/HeaderLogo.vue";
import LinksBar from '@/components/LinksBar.vue'
export default {
  name: 'HeaderBar',
  components: {
    HeaderLogo, LinksBar
  },
}
</script>

<style>
#headerbar {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left:20px;
  margin-top: 20px;
}
</style>