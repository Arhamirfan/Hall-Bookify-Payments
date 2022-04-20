import { firebaseConfig } from '../firebase';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get, set } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 


const firebaseConfig = {
    apiKey: "AIzaSyBQkjclxIWb9A20N8hsgjuKIZnQPjVlDX0",
    authDomain: "hall-bookify.firebaseapp.com",
    projectId: "hall-bookify",
    storageBucket: "hall-bookify.appspot.com",
    messagingSenderId: "836625590752",
    appId: "1:836625590752:web:2a1dbacb2abb428e86a385"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


//add data:


try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}


//get data:
try {
    const docRef = await addDoc(collection(db, "Receipt"), {
      buyeraddress: "Alan buyer",
      buyername: "Mathison buyer",
      buyeruid: "buyer uid",
      creatorfee: "1900",
      invoicenumber: "1234678",
      location: "sahiwal",
      package: "package name",
      packageprice: "1912",
      sellername: "Alan",
      selleruid: "seller uid",
      sellerwalletaddress: "wallet address",
      status: "pending",
      total:"937.5"
    });
  
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }


  //Read data:

const querySnapshot = await getDocs(collection(db, "receipt"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
// import {
//     StyleSheet,
//     Text,
//     View,
//     Dimensions,
//     FlatList,
//     Image,
//     SafeAreaView,
//     TouchableOpacity,
//     Button,
//     ScrollView,
//   } from "react-native";
//   import React, { useState } from "react";

//   const firebasePayment =() => {
//     const app = initializeApp(firebaseConfig);
//     const dbRef = ref(getDatabase());
//     var main=[];


//     get(child(dbRef, `DriverRecord`)).then((snapshot) => {
//         if (snapshot.exists()) {

//             snapshot.forEach((child) => {
//                 console.log(child.val());
//                 if (child.val().AmbulanceType == `${route.params.paramKey1}`) {
//                     main.push({
//                         key: child.val().Cnic,
//                         Name: child.val().Name,
//                         Contact: child.val().Contact,
//                         NoPlate: child.val().AmbNo,
//                     })
//                 }
//             })
//             setValue(main)
//             //console.log(snapshot.val());
//         } else {
//             console.log("No data available");
//         }
//     }).catch((error) => {
//         console.error(error);
//     });
//   }