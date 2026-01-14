// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCn0tsfY2AXPMWD7unS3C8ic64ELBqvrw",
  authDomain: "fir-auth-integration-f309f.firebaseapp.com",
  projectId: "fir-auth-integration-f309f",
  storageBucket: "fir-auth-integration-f309f.firebasestorage.app",
  messagingSenderId: "651673548700",
  appId: "1:651673548700:web:95c943b84a3c5aef46fa59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
