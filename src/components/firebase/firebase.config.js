import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: "travelai-c3e96.firebaseapp.com",
    projectId: "travelai-c3e96",
    storageBucket: "travelai-c3e96.appspot.com",
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId:process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID

};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)

// CLIENT FIREBASE
// apiKey: "AIzaSyBidVEBbPwA4y5bIUeDhIbS4Kjx2DfCYS8",
// authDomain: "explorebuddy-f8487.firebaseapp.com",
// projectId: "explorebuddy-f8487",
// storageBucket: "explorebuddy-f8487.appspot.com",
// messagingSenderId: "658978702361",
// appId: "1:658978702361:web:3994d483f73a53c2771688",
// measurementId: "G-976HH3QFZN"


