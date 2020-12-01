import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDXx4rhFN-GvZVZbDbriDJQ28NfwUyxWoU',
  authDomain: 'ararat-react.firebaseapp.com',
  databaseURL: 'https://ararat-react.firebaseio.com',
  projectId: 'ararat-react',
  storageBucket: 'ararat-react.appspot.com',
  messagingSenderId: '52415404900',
  appId: '1:52415404900:web:4f3d008110d8021f62f871',
  measurementId: 'G-7FDL1EZ07T',
};

const Firebase = firebase.initializeApp(config);

export default Firebase;
