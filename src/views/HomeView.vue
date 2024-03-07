<template>
  <HeaderBar />
  <!-- <img src="@/assets/gen.jpg" alt="Gennadi" > -->
  <div id="homebody">
    <div id="left">
      <div id="texts">
        <p id="name">
          Ельцов<br>
          Геннадий<br>
          Алексеевич
        </p>
        <div id="empty">
        </div>
        <p id="text">
          <span>„Живопись – это поэзия, которую видят, а поэзия – это живопись, которую слышат.“</span>
        </p>
      </div>
    </div>
    <div id="right">
      <img src="@/assets/foto.png" alt="gennadi-photo" id="foto">
    </div>
  </div>
  <PageFooter />
</template>

<script>
// @ is an alias to /src
import HeaderBar from '@/components/HeaderBar.vue';
import PageFooter from '@/components/Footer.vue';
export default {
  name: 'HomeView',
  components: {
    HeaderBar, PageFooter
  }
}
</script>

<style scoped>
#foto {
  
  width: 40vw;
}

#left {
  /* display: flex; */
  width: 40vw;
}
#right {
  display: flex;
  /* width: 50vw; */
}

#texts {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  /* width: 50vw; */
}
#empty{
  height:20px;
}

#name {
  font-family: 'Kaisei Decol';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 46px;
  color: white;
  margin:0;
}

#text {
  font-family: 'Miama';
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 63px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #FFFFFF;
}

#homebody {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around
  /* position: absolute; */
  /* min-width: 80vw;
  min-height: 80vw; */
  /* left: 0px;
  top: 100px; */
}
</style>
