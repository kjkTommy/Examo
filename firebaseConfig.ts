import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDuqAiOKxnZUvao1WBReM3lUwyLh1N57QU',
  authDomain: 'examo-73f04.firebaseapp.com',
  projectId: 'examo-73f04',
  storageBucket: 'examo-73f04.firebasestorage.app',
  messagingSenderId: '298912784410',
  appId: '1:298912784410:web:db5f89fe6fb5d3385cb1a3',
  measurementId: 'G-P1FSNF2WF9',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
