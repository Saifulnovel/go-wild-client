// Import the functions you need from the SDKs you need
import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAz5czbzTl9E2zcvN9FyF3V_73ep2JDas",
  authDomain: "photo-mania-1a21b.firebaseapp.com",
  projectId: "photo-mania-1a21b",
  storageBucket: "photo-mania-1a21b.appspot.com",
  messagingSenderId: "163055204499",
  appId: "1:163055204499:web:4e9c9be77bc4198b017566",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;