import firebase from "firebase";


const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyAkirAoEv31E6JtWqyoYxSEARiMY3iC_lQ",
    authDomain: "facebook-messenger-clone-de418.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-de418.firebaseio.com",
    projectId: "facebook-messenger-clone-de418",
    storageBucket: "facebook-messenger-clone-de418.appspot.com",
    messagingSenderId: "890143512594",
    appId: "1:890143512594:web:d6d78fcc51f6a4f7e1a0cb",
    measurementId: "G-31MD78WZ5P"
  });

  const db = firebaseApp.firestore();
  export default db ;