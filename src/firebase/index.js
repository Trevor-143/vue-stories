import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAxM7ktNFXjPx3ZLj0BevM9rS2chzATIbI",
  authDomain: "vuestories.firebaseapp.com",
  projectId: "vuestories",
  storageBucket: "vuestories.appspot.com",
  messagingSenderId: "654367641835",
  appId: "1:654367641835:web:b52262c836cc4052d9aeae"
};

const dataBase = getFirestore(initializeApp(firebaseConfig))

export {
  dataBase
}