import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

console.log(process.env)

const firebaseConfig = {
  apiKey: "AIzaSyDWJLmAC6Kb0kHZTiCVYlVptrGZPsgJinI",
  authDomain: "linkedin-clone-33417.firebaseapp.com",
  projectId: "linkedin-clone-33417",
  storageBucket:"linkedin-clone-33417.appspot.com",
  messagingSenderId: "102927271290",
  appId: "1:102927271290:web:47eecd9517bd197c8702c3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {
    db, 
    auth
}