// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVWS3zmWYEvGUfVfueC5zn7IYOhw69fSA",
  authDomain: "fir-learn-97276.firebaseapp.com",
  projectId: "fir-learn-97276",
  storageBucket: "fir-learn-97276.appspot.com",
  messagingSenderId: "832256793274",
  appId: "1:832256793274:web:d875d1b6c065cc652bc083",
  measurementId: "G-2N548SXYZS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);