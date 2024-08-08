// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIQl0weHWkyX7FNmGNCTElUYL9aL0HPMA",
    authDomain: "mern-book-inventory.firebaseapp.com",
    projectId: "mern-book-inventory",
    storageBucket: "mern-book-inventory.appspot.com",
    messagingSenderId: "282181520275",
    appId: "1:282181520275:web:0ce28538cea0433ea83666"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;