import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhYPCwXC84thxJGElBO_n6KDaqETJT1D8",
    authDomain: "facebook-clone-e8e50.firebaseapp.com",
    projectId: "facebook-clone-e8e50",
    storageBucket: "facebook-clone-e8e50.appspot.com",
    messagingSenderId: "544160853968",
    appId: "1:544160853968:web:3397f7c5121c32987793d5",
    measurementId: "G-MDD18Z4N4W"
  }; 

  const firebaseApp= initializeApp(firebaseConfig);
  const db=getFirestore(firebaseApp); 
  const auth= getAuth();
  const provider=new GoogleAuthProvider(auth); 

  export{auth, provider};
  export default db;

