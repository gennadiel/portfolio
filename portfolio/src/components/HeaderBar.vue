<template>
  <div id="headerbar"><HeaderLogo />
  <LinksBar/></div>
  
  
</template>


<script>
import HeaderLogo from "@/components/HeaderLogo.vue";
import LinksBar from '@/components/LinksBar.vue'
export default {
  name: 'HeaderBar',
  components: {
    HeaderLogo, LinksBar
  }
}
</script>

<style scoped>
#headerbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
}


</style>