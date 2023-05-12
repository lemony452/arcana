// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAsm18-QSUY0yFRJLSfPuUwWNXXtR5NhOs',
  authDomain: 'ssafy-8d107-arcana.firebaseapp.com',
  projectId: 'ssafy-8d107-arcana',
  storageBucket: 'ssafy-8d107-arcana.appspot.com',
  messagingSenderId: '122535767259',
  appId: '1:122535767259:web:078a5cf91f67133dc6b0fe',
  measurementId: 'G-VEXZTKBPSM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
