import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCu0Kev6YGf04s63h8tjVFniOx6ZQzxE7Q",
  authDomain: "tik-tok---jornada-c75db.firebaseapp.com",
  projectId: "tik-tok---jornada-c75db",
  storageBucket: "tik-tok---jornada-c75db.appspot.com",
  messagingSenderId: "522867246090",
  appId: "1:522867246090:web:db03af36b93dd368694bf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;