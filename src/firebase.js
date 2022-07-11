import firebase from './firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBxmpsmB04H4c1vbBGwDr05Cuehi3N4dS8",
    authDomain: "linkedinclone-32a52.firebaseapp.com",
    projectId: "linkedinclone-32a52",
    storageBucket: "linkedinclone-32a52.appspot.com",
    messagingSenderId: "778110012610",
    appId: "1:778110012610:web:a86aa422e7082594e4bf5b"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};