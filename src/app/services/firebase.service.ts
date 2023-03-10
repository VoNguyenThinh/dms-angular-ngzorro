import { Injectable } from '@angular/core';
import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import { Auth, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { Database, getDatabase, ref, set, onValue } from 'firebase/database';
import { config } from '../config/firebase.config';
import { LoginPayload, ResponseMethod } from '../interface/login.interface';

@Injectable({
   providedIn: 'root'
})
export class FirebaseService {
   firebaseConfig: FirebaseOptions = {};
   app: FirebaseApp;
   database: Database;
   auth: Auth;

   constructor() {
      this.firebaseConfig = config;
      this.app = initializeApp(this.firebaseConfig);
      this.database = getDatabase(this.app);
      this.auth = getAuth(this.app);
   }

   async getUserInfo() {
      return new Promise<User | null>(resolve => {
         onAuthStateChanged(this.auth, (user: User | null) => {
            resolve(user);
         });
      });
   }

   setFirebaseLanguage(language: string) {
      set(ref(this.database, '/language'), language);
   }

   getFirebaseLanguage(callback: any) {
      const startRef = ref(this.database, '/language');
      onValue(startRef, snapshot => {
         callback(snapshot);
      });
   }
}

