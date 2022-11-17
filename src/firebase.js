import * as dotenv from 'dotenv';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

dotenv.config();
const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: 'emorfincv.firebaseapp.com',
  projectId: 'emorfincv',
  storageBucket: 'emorfincv.appspot.com',
  messagingSenderId: '752423824566',
  appId: process.env.FB_APP_ID,
  measurementId: 'G-BW0507460F',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
