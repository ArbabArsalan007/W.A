import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
 apiKey: "AIzaSyDqSVpdzsjQERyIJa5Hqj8CdFj3oEslnt0",
  authDomain: "whatsapp-2f099.firebaseapp.com",
  projectId: "whatsapp-2f099",
  storageBucket: "whatsapp-2f099.appspot.com",
  messagingSenderId: "42908377145",
  appId: "1:42908377145:web:a0502ee14bbfd30c6f2de8",
  measurementId: "G-YPZEDG625Z"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
