/**
 *                          ------------------
 *                             INITIAL SETUP
 *                          ------------------
 * 
 * 
 * 1. visit: console.firebase.google.com
 * 2.create project (skip google analytics)
 * 3.register app (create config)
 * 4.install firebase
 * 5.add config file to your project
 * 6.DANGER: Do not publish or make firebase config to public by pushing those to github
 * 
 *                          ------------------
 *                             INTEGRATION
 *                          ------------------
 * 
 * 7.Visit: Go to Docs > Build > Authentication > Web > Get Started
 * 8.Export app from the firebase.config.js file: export default app
 * 9.Login.jsx: import getAuth from firebase/auth
 * 10. create const auth = getAuth(app)
 * 
 *                          ------------------
 *                            PROVIDER SETUP
 *                          ------------------
 * 
 * 11.import GoogleAuthProvider and create a new provider
 * 12. use signInWithPopUp and pass auth and provider
 * 13.activate sign in method (google, facebook, github)
 * 14.[vite] : change 127.0.0.1  to localhost
 * 
 * 
 * ****/





// rakib vai er steps


// ------------step-1:terminaly korte hobe ----------
// >>> npm install firebase


    // ------------step-2: kono ekti js file e korte hobe ----------
    // >>>>
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* const firebaseConfig = {
    apiKey: "AIzaSyC7klbNDVMc8-blBRSo940gIu2X6p4pcQw",
    authDomain: "dimple-firebase-76231.firebaseapp.com",
    projectId: "dimple-firebase-76231",
    storageBucket: "dimple-firebase-76231.appspot.com",
    messagingSenderId: "1095877020192",
    appId: "1:1095877020192:web:c3b11d7c9ea53fb93a0a45"
}; */

// Initialize Firebase
/* const app = initializeApp(firebaseConfig);
export default app */



             //----------step-3: app.jsx e korte hobe ----------
/* then 'go to docs'  e jabo.then 'build' e jabo.then 'Authentication' jabo.tehn 'web' e jabo.tehn get started e jabo. eikhaner kaj shes hole jabo 'google'.
>>>>>
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();
const auth = getAuth(app); */
// then ekta handle function nibo jeta kono ekta buutton er onClick e boshbe.handle function er moddhe.......
/* const handleButtin = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
        }).catch((error) => {
            console.log(error)
        });
} */

               // ---------------------step-4-----------------------
// >>>>
    // google Authentication on korte hobe

        // ---------------------step-5-----------------------
        // >>>>
        // then button e click kore ekta google account add korbo.then segula abr ekta state e set kore oi google account er data gulo loade kore dekhaite pari.