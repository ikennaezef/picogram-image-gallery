import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

// Initialize Firebase
const app = firebase.initializeApp({
  apiKey: "AIzaSyDaJXzSKdEfw53lAYWXN_M0S-5AeDrYooc",
  authDomain: "picogram-21aac.firebaseapp.com",
  projectId: "picogram-21aac",
  storageBucket: "picogram-21aac.appspot.com",
  messagingSenderId: "33883810965",
  appId: "1:33883810965:web:62f124df021bbdd1187f9c"
});

const appStorage = firebase.storage();
const appFirestore = app.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { appStorage, appFirestore, timestamp };