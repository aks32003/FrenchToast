// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEby0WjMY-ALNlhDf70RxG5NYRupOvlNs",
  authDomain: "pathfinder-767b6.firebaseapp.com",
  projectId: "pathfinder-767b6",
  storageBucket: "pathfinder-767b6.appspot.com",
  messagingSenderId: "101167295703",
  appId: "1:101167295703:web:a8d2894acafe7cbf011492"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firebase storage reference
const storage = getStorage(app);
export default storage;
