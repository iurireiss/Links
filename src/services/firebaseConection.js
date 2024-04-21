
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvYq_RK3yzkGd0Qv3oorw_l1LwA1xKIxU",
  authDomain: "reactlinks-4e514.firebaseapp.com",
  projectId: "reactlinks-4e514",
  storageBucket: "reactlinks-4e514.appspot.com",
  messagingSenderId: "787731033194",
  appId: "1:787731033194:web:09bfd0a01d6a9624c5ae13"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db};