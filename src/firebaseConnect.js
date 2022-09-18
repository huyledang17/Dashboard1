import firebase from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBBSJC6kfbZwqDvj9pxZ1f7PQxLsP_TN2I",
    authDomain: "notereastjs-a6d7a.firebaseapp.com",
    databaseURL: "https://notereastjs-a6d7a-default-rtdb.firebaseio.com",
    projectId: "notereastjs-a6d7a",
    storageBucket: "notereastjs-a6d7a.appspot.com",
    messagingSenderId: "906744126296",
    appId: "1:906744126296:web:50d071554a3241df36632d",
    measurementId: "G-FNL7Y5GFG8"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const firebaseConnect = firebase.initializeApp(firebaseConfig);