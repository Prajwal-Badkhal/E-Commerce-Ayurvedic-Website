import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
 

const firebaseConfig = {
  apiKey: "AIzaSyCmtfZWDb-dLBZZP27cFRPYph-8EZaPMN0",
  authDomain: "e-commerce-firebase-auth.firebaseapp.com",
  projectId: "e-commerce-firebase-auth",
  storageBucket: "e-commerce-firebase-auth.appspot.com",
  messagingSenderId: "554643537952",
  appId: "1:554643537952:web:fed75ded7d9b6ece687c45",
  measurementId: "G-YYQNGCQLNC"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);