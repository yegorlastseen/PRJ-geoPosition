import firebase from "firebase/app";
import { firebaseConfig } from './config'
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "/",
    authDomain: "geo-position-73c34.firebaseapp.com",
    databaseURL: "https://geo-position-73c34-default-rtdb.firebaseio.com",
    projectId: "geo-position-73c34",
    storageBucket: "geo-position-73c34.appspot.com",
    messagingSenderId: "682612308866",
    appId: "1:682612308866:web:f7f27e6e5419216a026d9b",
    measurementId: "G-XZZ28H7C69"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true });

  export default firebaseApp.firestore();
