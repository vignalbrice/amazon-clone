import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEIHClU6PvuBtmd2adAU-RNrUJbX5cFAw",
  authDomain: "clone-7ebf4.firebaseapp.com",
  projectId: "clone-7ebf4",
  storageBucket: "clone-7ebf4.appspot.com",
  messagingSenderId: "109494952702",
  appId: "1:109494952702:web:66dfd187779fea20817baf",
  measurementId: "G-2V5TX4M30H",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
