import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTrxD-WTK7gakSa_9YOyurBoQoYMr4ItE",
  authDomain: "recipe-site-e7cff.firebaseapp.com",
  projectId: "recipe-site-e7cff",
  storageBucket: "recipe-site-e7cff.appspot.com",
  messagingSenderId: "892765202146",
  appId: "1:892765202146:web:0e4615ca2f88b96db220bb",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services

const projectFirestore = firebase.firestore();

export { projectFirestore };
