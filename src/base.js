import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCazF6VsWzRKs1WKEEZp43IDj1KhwmsGnw",
  authDomain: "catch-of-the-day-danfrenette2.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-danfrenette2.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
