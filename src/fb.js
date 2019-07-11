import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
 var firebaseConfig = {
   apiKey: "AIzaSyBEacFgMDUPbiNn-kH1uRAplsp_TEr1cU4",
   authDomain: "vuetify-project-manager-ceefa.firebaseapp.com",
   databaseURL: "https://vuetify-project-manager-ceefa.firebaseio.com",
   projectId: "vuetify-project-manager-ceefa",
   storageBucket: "vuetify-project-manager-ceefa.appspot.com",
   messagingSenderId: "945440094381",
   appId: "1:945440094381:web:e113be0f21843976"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore();

 export default db;
