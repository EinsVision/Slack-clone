import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBL6-2mSL1QyJi8D9b3QpxPK2yw7BzBYD0",
  authDomain: "slack-clone-141f5.firebaseapp.com",
  projectId: "slack-clone-141f5",
  storageBucket: "slack-clone-141f5.appspot.com",
  messagingSenderId: "998305076166",
  appId: "1:998305076166:web:629ce9f1a135cec56b18c7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };