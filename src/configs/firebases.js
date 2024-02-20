import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB8knlC-1eSdFtN1OTMGQe3082Dr5N76PE',
  authDomain: 'imoney-2562e.firebaseapp.com',
  projectId: 'imoney-2562e',
  storageBucket: 'imoney-2562e.appspot.com',
  messagingSenderId: '797611638901',
  appId: '1:797611638901:web:c2a8f85f43c47c1de8f83c',
  measurementId: 'G-LE02NS4DGC',
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectAuth, projectFirestore, projectStorage, timestamp };
