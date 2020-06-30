
import 'firebase/firestore';
import 'firebase/auth';
import firebase from 'firebase/app';


const config = {
    apiKey: "AIzaSyAFmWYx6b400K7SsiA6ikANNtNtRSRyFbA",
    authDomain: "bhavin-project-71590.firebaseapp.com",
    databaseURL: "https://bhavin-project-71590.firebaseio.com",
    projectId: "bhavin-project-71590",
    storageBucket: "bhavin-project-71590.appspot.com",
    messagingSenderId: "1063616084552",
    appId: "1:1063616084552:web:d16f278f5bdabbadac367d"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const singInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;