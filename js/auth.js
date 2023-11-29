// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjdnYQIhHawLRWsFjyfvb28Nv3r65DeJ0",
  authDomain: "gennady-website.firebaseapp.com",
  projectId: "gennady-website",
  storageBucket: "gennady-website.appspot.com",
  messagingSenderId: "850191528241",
  appId: "1:850191528241:web:ede7443e5802f1432a8010",
  measurementId: "G-K0BNTHKX3D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export function signIn() {
    var email = "viktoahlberk@gmail.com";
    var password = "iddqdiddqd";

    //Sign In User with Email and Password
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    });
}