// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfigtY7ZnPIZQznWDoLGzxIZygSvzrevI",
    authDomain: "netflixgpt-got.firebaseapp.com",
    projectId: "netflixgpt-got",
    storageBucket: "netflixgpt-got.firebasestorage.app",
    messagingSenderId: "620710981754",
    appId: "1:620710981754:web:72d8fb362f7c44174f4bc3",
    measurementId: "G-Q5G5NQRWGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);