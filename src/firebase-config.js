// import { initializeApp } from 'firebase/app';
// import { getFirestore } from "firebase/firestore";
// const firebaseConfig = {
//     apiKey: "AIzaSyBQkjclxIWb9A20N8hsgjuKIZnQPjVlDX0",
//     authDomain: "hall-bookify.firebaseapp.com",
//     projectId: "hall-bookify",
//     storageBucket: "hall-bookify.appspot.com",
//     messagingSenderId: "836625590752",
//     appId: "1:836625590752:web:2a1dbacb2abb428e86a385"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBQkjclxIWb9A20N8hsgjuKIZnQPjVlDX0",
    authDomain: "hall-bookify.firebaseapp.com",
    projectId: "hall-bookify",
    storageBucket: "hall-bookify.appspot.com",
    messagingSenderId: "836625590752",
    appId: "1:836625590752:web:2a1dbacb2abb428e86a385"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);