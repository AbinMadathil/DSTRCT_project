import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyBV8lkZLWZfSO9y5dGkdpooBULwfMGUabo",
  
    authDomain: "sampleproject1-93a2a.firebaseapp.com",
  
    projectId: "sampleproject1-93a2a",
  
    storageBucket: "sampleproject1-93a2a.appspot.com",
  
    messagingSenderId: "143520858598",
  
    appId: "1:143520858598:web:bf0b4d0e28c3e74e4c1627",
  
    measurementId: "G-4ZMCD9CTZR"
  
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  
  export { firebase };