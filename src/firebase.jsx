import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCc8UGOm14lHoChGyGHkpzB6bqNe5BXftQ",
  authDomain: "nompilo--clone.firebaseapp.com",
  projectId: "nompilo--clone",
  storageBucket: "nompilo--clone.firebasestorage.app",
  messagingSenderId: "509659306180",
  appId: "1:509659306180:web:500803ddf2fbb9a271191",
  measurementId: "G-JKP7Q67948",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };