import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA8IrkrZ94S9UDofSsT3VDlYSifwQVcet8",
    authDomain: "crwn-db-c6537.firebaseapp.com",
    databaseURL: "https://crwn-db-c6537.firebaseio.com",
    projectId: "crwn-db-c6537",
    storageBucket: "crwn-db-c6537.appspot.com",
    messagingSenderId: "1023975036748",
    appId: "1:1023975036748:web:a0a61f32ab685e59b161e9",
    measurementId: "G-YMECHWDDDM"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;