// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, /*createUserWithEmailAndPassword,*/ signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js'
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
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
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export function signIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // var user = firebase.auth().currentUser;
            if (user) {
                // User is signed in.
                console.log(user);
                if (user != null) {
                    name = user.displayName;
                    email = user.email;
                    photoUrl = user.photoURL;
                    emailVerified = user.emailVerified;
                    uid = user.uid;
                    // The user's ID, unique to the Firebase project. Do NOT use
                    // this value to authenticate with your backend server, if
                    // you have one. Use User.getToken() instead.
                    window.alert('$email is signed in.')
                }
            } else {
                window.alert('Error');
            }
            
            // ...
        })
        .catch((error) => {
            
            const errorCode = error.code;
            console.log(errorCode);
            const errorMessage = error.message;
            console.log(errorMessage);
            if (errorMessage=="Firebase: Error (auth/invalid-email)."){
                window.alert('INVALID EMAIL');
            }
            else if (errorMessage=="Firebase: Error (auth/invalid-credential)."){
                window.alert('INVALID PASSWORD');
            }
        });
}
// export function signIn(email, password) {
//     signInWithEmailAndPassword(email, password).catch(function (error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         console.log(errorCode);
//         console.log(errorMessage);
//     });
// }