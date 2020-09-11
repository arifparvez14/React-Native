import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGj2DAt95MtDUgaKMSNA0pJna4eQM3XNc",
  authDomain: "noteapp-21fee.firebaseapp.com",
  databaseURL: "https://noteapp-21fee.firebaseio.com",
  projectId: "noteapp-21fee",
  storageBucket: "noteapp-21fee.appspot.com",
  messagingSenderId: "522055683039",
  appId: "1:522055683039:web:9916ef9e49634293ff926a",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
