import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDb8VnKUBWdhZ4pXX0jkUtLYQq6jceekoo",
  authDomain: "peer-project-hub-74f21.firebaseapp.com",
  projectId: "peer-project-hub-74f21",
  storageBucket: "peer-project-hub-74f21.firebasestorage.app",
  messagingSenderId: "272680666305",
  appId: "1:272680666305:web:5df7064d9576da9c460040",
  measurementId: "G-1LZH1KQQCJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
