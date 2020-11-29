import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeU8esaGbb2-COgXlxK2WrseBEANnNAdA",
  authDomain: "clone-d0660.firebaseapp.com",
  databaseURL: "https://clone-d0660.firebaseio.com",
  projectId: "clone-d0660",
  storageBucket: "clone-d0660.appspot.com",
  messagingSenderId: "202686432822",
  appId: "1:202686432822:web:6988786a996d9eda05ba97",
  measurementId: "G-FPJZG02FCX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };
