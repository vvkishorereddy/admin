import * as firebase from "firebase";
//import firestore from "firebase/firestore";

var config = {
  apiKey: "AIzaSyCd8j49MudQYQ2d7jWyye5R2WEIsyE9ZGo",
  authDomain: "questions-answers-e58a7.firebaseapp.com",
  databaseURL: "https://questions-answers-e58a7.firebaseio.com",
  projectId: "questions-answers-e58a7",
  storageBucket: "questions-answers-e58a7.appspot.com",
  messagingSenderId: "924884242652"
};
firebase.initializeApp(config);

//firebase.firestore();

export default firebase;
