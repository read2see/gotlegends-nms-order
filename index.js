// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAwTwoxStyuFWjPJUrYVS6WI57Rci0ooRA",

  authDomain: "gotlegends-nms-order.firebaseapp.com",

  databaseURL: "https://gotlegends-nms-order-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "gotlegends-nms-order",

  storageBucket: "gotlegends-nms-order.appspot.com",

  messagingSenderId: "1090627912682",

  appId: "1:1090627912682:web:ea7a154989c9a5613f2893",

  measurementId: "G-9HKVXR9359"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
