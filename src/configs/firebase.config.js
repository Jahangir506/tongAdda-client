import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-VoCYKO4WUhy_akh_CjnmWVhn9U3fu5M",
  authDomain: "tong-adda.firebaseapp.com",
  projectId: "tong-adda",
  storageBucket: "tong-adda.appspot.com",
  messagingSenderId: "987378898385",
  appId: "1:987378898385:web:1567ca4d9de5d5a4adbcf0"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;