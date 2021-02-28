import * as firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth"; 

var firebaseConfig = {
    apiKey: "AIzaSyBVdP_YE3i4MTTWNU7TCojxNBv38wt16gQ",
    authDomain: "collegea-37b36.firebaseapp.com",
    projectId: "collegea-37b36",
    storageBucket: "collegea-37b36.appspot.com",
    messagingSenderId: "251349246048",
    appId: "1:251349246048:web:ef5edcfac068f4a27c6305",
    measurementId: "G-NVEKLHW470"
  };

let app;
  
if(firebase.apps.length === 0){
  app=firebase.initializeApp(firebaseConfig);
}
else{
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db,auth};