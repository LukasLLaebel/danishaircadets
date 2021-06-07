import firebase from 'firebase/app';

import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAoe-AiKurzn9tNl1VLpp9C9jn7YGBYAZk",
    authDomain: "projekt-2313.firebaseapp.com",
    projectId: "projekt-2313",
    storageBucket: "projekt-2313.appspot.com",
    messagingSenderId: "798343301681",
    appId: "1:798343301681:web:6dd7cc3b753646fe8e6310"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
