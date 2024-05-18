<template>

  <div v-if="!isPageLoaded">
    <LoadingScreen />
  </div>

  <div v-if="isPageLoaded" id="pageloaded">
    <HeaderBar />
    
    <!-- <img src="@/assets/gen.jpg" alt="Gennadi" > -->
    <div id="homebody">



      <div id="left">
        <div id="texts">
          <p id="name" class="animated-text">
            <img src="@/assets/logo1.png" alt="" id="logo1">
            <!-- Ельцов<br>
            Геннадий<br>
            Алексеевич -->
          </p>
          <div id="empty">
          </div>
          <p id="text">
            <span>„Живопись – это поэзия, которую видят, а поэзия – это живопись, которую слышат.“</span>
          </p>
        </div>
      </div>
      <div id="right">
        <!-- <img src="@/assets/foto.png" alt="gennadi-photo" id="foto"> -->
      </div>
    </div>
    <PageFooter />
  </div>
  

</template>

<script>
// @ is an alias to /src
import HeaderBar from '@/components/HeaderBar.vue';
import PageFooter from '@/components/Footer.vue';
import LoadingScreen from "@/components/LoadingScreen.vue";
export default {
  name: 'HomeView',
  components: {
    HeaderBar,
    PageFooter,
    LoadingScreen,
  },
  data() {
    return {
      isPageLoaded: false,
    };
  },
  created() {
      this.handlePageLoad();
  },
  // mounted() {
  //   // document.addEventListener("DOMContentLoaded", this.handlePageLoad);

  //   this.handlePageLoad();
  //   // console.log('loaded');
  // },
  // beforeUnmount() {
  //   document.removeEventListener("DOMContentLoaded", this.handlePageLoad);
  // },
  methods: {
    handlePageLoad() {
      this.isPageLoaded = true;
      // console.log('true now');
    },
  },
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

#empty {
  height: 20px;
}

#name {
  font-family: 'Kaisei Decol';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 46px;
  color: white;
  margin: 0;
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
#pageloaded{
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 100vh;
  min-width: 100vw;
}
.animated-text {
 

  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: left;
  opacity: 0;
  transform: translateY(50px);
  animation: fadeInUp 1s ease-out forwards;
}

#logo1{
  border-radius: 20%;
  width: 70vw;
  height: auto;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
