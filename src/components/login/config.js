import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBaGWW7PFCbyPnrUfA8ShGoqnYr6Z8hbO8",
  authDomain: "blockchainhackathon-23f4a.firebaseapp.com",
  projectId: "blockchainhackathon-23f4a",
  storageBucket: "blockchainhackathon-23f4a.appspot.com",
  messagingSenderId: "391819403985",
  appId: "1:391819403985:web:7d8fbea72e5fea46e1dbf0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};