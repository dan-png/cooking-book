import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDkGxgw6GSRgHPytLyLn0Wve3Cli827t2g",
  authDomain: "cooking-book-249a1.firebaseapp.com",
  projectId: "cooking-book-249a1",
  storageBucket: "cooking-book-249a1.appspot.com",
  messagingSenderId: "968290776860",
  appId: "1:968290776860:web:562c4828c85b193999ecd9"
}

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()