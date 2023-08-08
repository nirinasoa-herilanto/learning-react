import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

import { appConfig } from './app.config';

const firebaseConfig = {
  apiKey: appConfig.auth.apiKey,
  authDomain: appConfig.auth.authDomain,
  databaseURL: appConfig.auth.databaseUrl,
  projectId: appConfig.auth.projectId,
  storageBucket: appConfig.auth.storageBucket,
  messagingSenderId: appConfig.auth.messagingSenderId,
  appId: appConfig.auth.appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
