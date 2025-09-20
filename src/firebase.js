import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3mcD2KXWh5FS2maJLKHCokwDZgjRpNHs",
  authDomain: "finance-trac-e0594.firebaseapp.com",
  projectId: "finance-trac-e0594",
  storageBucket: "finance-trac-e0594.appspot.com",
  messagingSenderId: "478177305005",
  appId: "1:478177305005:web:392325617a2cd299aa4124",
  measurementId: "G-NSJQ4ZRRMC"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
