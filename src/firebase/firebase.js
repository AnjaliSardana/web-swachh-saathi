import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDKzcpDM793InvBAuCoM3kgB0I2SUE4Nqw",
  authDomain: "web-swachh-saathi.firebaseapp.com",
  projectId: "web-swachh-saathi",
  storageBucket: "web-swachh-saathi.firebasestorage.app",
  messagingSenderId: "444404292871",
  appId: "1:444404292871:web:1234f4a0881be4d275b9a2",
  measurementId: "G-E4P86Q20G1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance instead of Realtime Database
export const db = getFirestore(app); 