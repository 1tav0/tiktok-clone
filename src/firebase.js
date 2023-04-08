import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDZYZ9VOxktmhPXAj4PdBMkG08iuN1PeVM",
    authDomain: "tiktok-clone-eb772.firebaseapp.com",
    projectId: "tiktok-clone-eb772",
    storageBucket: "tiktok-clone-eb772.appspot.com",
    messagingSenderId: "652651356229",
    appId: "1:652651356229:web:57da59767cb4869aa5832c"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db