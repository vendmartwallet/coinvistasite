// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyB0qUxX31udwmuKuNg6AQlLyN6GVvNr8oc",
  authDomain: "todo-list-843c7.firebaseapp.com",
  databaseURL: "https://todo-list-843c7-default-rtdb.firebaseio.com",
  projectId: "todo-list-843c7",
  storageBucket: "todo-list-843c7.appspot.com",
  messagingSenderId: "277393199335",
  appId: "1:277393199335:web:f24a8a1bc6a76fc8da9242",
  measurementId: "G-5BF50FXN20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const analytics = getAnalytics(app);


export { app, auth, db  }; 
