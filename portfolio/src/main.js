import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'
import { initializeApp } from 'firebase/app';
// import { getDatabase } from "firebase/database";

// Create a new store instance.
const store = createStore({
    state () {
      return {
        // count: 0,
        isLogged: false
      }
    },
    mutations: {
    //   increment (state) {
    //     state.count++
    //   },
      login(state){
        state.isLogged = true;
      },
      logout(state){
        state.isLogged = false;
      }
    }, 
    getters: {
        isLogged(state){
            return state.isLogged
        }
    },
    actions: {
        logIn(context){
            context.commit('login')
        },
        logOut(context){
            context.commit('logout')
        }
    }
  })

const firebaseConfig = {
    apiKey: "AIzaSyAjdnYQIhHawLRWsFjyfvb28Nv3r65DeJ0",
    authDomain: "gennady-website.firebaseapp.com",
    databaseURL: "https://gennady-website-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gennady-website",
    storageBucket: "gennady-website.appspot.com",
    messagingSenderId: "850191528241",
    appId: "1:850191528241:web:ede7443e5802f1432a8010",
    measurementId: "G-K0BNTHKX3D"
};

initializeApp(firebaseConfig);

const app = createApp(App)
// Initialize Realtime Database and get a reference to the service
// export const database = getDatabase(app);

app.use(router)
app.use(store)

app.mount('#app')

