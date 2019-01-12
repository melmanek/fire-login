import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDZWZObmF0TL5ScAz-GMnlkKHYS0F1eSmU",
  authDomain: "login-fd9f2.firebaseapp.com",
  databaseURL: "https://login-fd9f2.firebaseio.com",
  projectId: "login-fd9f2",
  storageBucket: "login-fd9f2.appspot.com",
  messagingSenderId: "583451841567"
});

const auth = firebase.auth();

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export { auth, db };
