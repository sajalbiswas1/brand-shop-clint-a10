// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiAOaXXM56NhVs80H5nSiTjdnX9V_Rwhw",
  authDomain: "brand-shop-886b1.firebaseapp.com",
  projectId: "brand-shop-886b1",
  storageBucket: "brand-shop-886b1.appspot.com",
  messagingSenderId: "907292502785",
  appId: "1:907292502785:web:cf958d94dfbeb421adc900"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;