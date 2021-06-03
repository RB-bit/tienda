import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "tienda-coderhouse-8d24f.firebaseapp.com",
    projectId: "tienda-coderhouse-8d24f",
    storageBucket: "tienda-coderhouse-8d24f.appspot.com",
    messagingSenderId: "785245004201",
    appId: "1:785245004201:web:d52bc7fb5a3467d45164b8",
    measurementId: "G-VEXG14GFFN"
});

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);