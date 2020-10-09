import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOOEClpxpB1t9r8iekoMds8Jc2dRLgsLQ",
  authDomain: "clone-ae4f4.firebaseapp.com",
  databaseURL: "https://clone-ae4f4.firebaseio.com",
  projectId: "clone-ae4f4",
  storageBucket: "clone-ae4f4.appspot.com",
  messagingSenderId: "281830232745",
  appId: "1:281830232745:web:6f3074d9a5a5681a198fb8",
  measurementId: "G-K7LG2CBEKD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
