import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCGH_wmne80uq4tbAIf3kphh-XVsz0eDPI",
  authDomain: "paisawasool-996cb.firebaseapp.com",
  projectId: "paisawasool-996cb",
  storageBucket: "paisawasool-996cb.appspot.com",
  messagingSenderId: "981048650255",
  appId: "1:981048650255:web:d997c98f0f0385abbc517a",
  measurementId: "G-EVQPTBQ3S8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app);
const storage = getStorage(app);


export {
    auth,
    db,
    storage
    
}