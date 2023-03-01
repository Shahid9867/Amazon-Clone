// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZp6HudDXG8quOx92iikXrv9qyqaslt5s",
  authDomain: "clone-b1bb1.firebaseapp.com",
  projectId: "clone-b1bb1",
  storageBucket: "clone-b1bb1.appspot.com",
  messagingSenderId: "661618575381",
  appId: "1:661618575381:web:4e5052035a9755924aa61c",
  measurementId: "G-F700503L3V"
};


const firebaseApp =firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };