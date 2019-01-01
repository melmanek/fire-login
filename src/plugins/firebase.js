import * as firebase from "firebase/app"
import "firebase/auth"

firebase.initializeApp({
  apiKey: "AIzaSyDZWZObmF0TL5ScAz-GMnlkKHYS0F1eSmU",
  authDomain: "login-fd9f2.firebaseapp.com",
  databaseURL: "https://login-fd9f2.firebaseio.com",
  projectId: "login-fd9f2",
  storageBucket: "login-fd9f2.appspot.com",
  messagingSenderId: "583451841567"
})

export const auth = firebase.auth()
