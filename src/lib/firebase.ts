import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCnLZrxMK0P4uHZL8KxfsVAGKSKVscCKqo",
    authDomain: "my-first-site-e9210.firebaseapp.com",
    projectId: "my-first-site-e9210",
    storageBucket: "my-first-site-e9210.firebasestorage.app",
    messagingSenderId: "675684570102",
    appId: "1:675684570102:web:1ff05925fa006eb8a9add7",
    measurementId: "G-WP4NKWHDQ0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);