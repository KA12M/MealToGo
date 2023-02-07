import { initializeApp } from "firebase/app";
import * as auth from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDRjl7KBvDP0pVKRGUnxbXHo0OsmBFDHcg",
  authDomain: "mealstogo-bf244.firebaseapp.com",
  projectId: "mealstogo-bf244",
  storageBucket: "mealstogo-bf244.appspot.com",
  messagingSenderId: "249491979585",
  appId: "1:249491979585:web:d3ff6d5f211beb45fcf5c0",
};

initializeApp(firebaseConfig);

const getAuth = auth.getAuth();

export const firebase = { auth, getAuth };
