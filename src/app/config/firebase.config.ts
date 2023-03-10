import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const config = {
   apiKey: 'AIzaSyDZvz8dF0Ov-hyLhPGJxqIVbDxTg1NJVrI',
   authDomain: 'hero-project-angular-aut-61929.firebaseapp.com',
   projectId: 'hero-project-angular-aut-61929',
   storageBucket: 'hero-project-angular-aut-61929.appspot.com',
   messagingSenderId: '60109339451',
   appId: '1:60109339451:web:6ae58e0d3b13a39af7951e',
   measurementId: 'G-XNT39W5JME',
   databaseURL: 'https://hero-project-angular-aut-61929-default-rtdb.firebaseio.com'
};
const app = initializeApp(config);
const auth = getAuth(app);

export { app, auth, config };
export * from 'firebase/auth';
