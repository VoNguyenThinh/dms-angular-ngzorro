import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword  } from 'firebase/auth';
import { from } from 'rxjs';
// import * as firebaseAuth from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDZvz8dF0Ov-hyLhPGJxqIVbDxTg1NJVrI',
  authDomain: 'hero-project-angular-aut-61929.firebaseapp.com',
  projectId: 'hero-project-angular-aut-61929',
  storageBucket: 'hero-project-angular-aut-61929.appspot.com',
  messagingSenderId: '60109339451',
  appId: '1:60109339451:web:6ae58e0d3b13a39af7951e',
  measurementId: 'G-XNT39W5JME'
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth};
export * from "firebase/auth"
