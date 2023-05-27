import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBySO8c2sxpmIF81iSRA03-_qBJggbBymY",
    authDomain: "next-fire-8d817.firebaseapp.com",
    projectId: "next-fire-8d817",
    storageBucket: "next-fire-8d817.appspot.com",
    messagingSenderId: "311822580992",
    appId: "1:311822580992:web:f1d43928dffbd7e2af07e5",
    measurementId: "G-PW7ZSKFC00"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();