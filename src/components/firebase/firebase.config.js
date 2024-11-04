import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDHp0zLpYCFdRKwe1k8r4Utra__VmZLvBo",
    authDomain: "travelai-c3e96.firebaseapp.com",
    projectId: "travelai-c3e96",
    storageBucket: "travelai-c3e96.appspot.com",
    messagingSenderId: "328582402646",
    appId: "1:328582402646:web:6890efc03bfade0603e1f7",
    measurementId: "G-BYD83KYBRW"
    // apiKey: "AIzaSyBidVEBbPwA4y5bIUeDhIbS4Kjx2DfCYS8",
    // authDomain: "explorebuddy-f8487.firebaseapp.com",
    // projectId: "explorebuddy-f8487",
    // storageBucket: "explorebuddy-f8487.appspot.com",
    // messagingSenderId: "658978702361",
    // appId: "1:658978702361:web:3994d483f73a53c2771688",
    // measurementId: "G-976HH3QFZN"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)



