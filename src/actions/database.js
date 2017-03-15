import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA0Gf7PfJVuZCKYymvIZZlzeDE6JdOOrgQ",
  authDomain: "simonhighscores.firebaseapp.com",
  databaseURL: "https://simonhighscores.firebaseio.com",
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
