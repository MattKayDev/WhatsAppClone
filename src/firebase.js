// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBwAp9M-ctM09L_nhE1scmX231la0QCvuY",
    authDomain: "whatsapp-clone-bea3f.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-bea3f.firebaseio.com",
    projectId: "whatsapp-clone-bea3f",
    storageBucket: "whatsapp-clone-bea3f.appspot.com",
    messagingSenderId: "715067193304",
    appId: "1:715067193304:web:28020e45596ff1b53ee4ad",
    measurementId: "G-BM37SZR0JP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;