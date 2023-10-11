import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBnbfJrb6ozb2-6vfd8YqJzaFC9kG71z4s",
  authDomain: "linkedin-clone-acb3f.firebaseapp.com",
  projectId: "linkedin-clone-acb3f",
  storageBucket: "linkedin-clone-acb3f.appspot.com",
  messagingSenderId: "666703420918",
  appId: "1:666703420918:web:7028c0fdfa10dba3183bd7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)
export const database = getFirestore(app) 