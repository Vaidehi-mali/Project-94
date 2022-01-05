
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyDJKpaIx6Pp3zgnmqfHZkuO56mwwJC4s08",
  authDomain: "project-94-1dc4d.firebaseapp.com",
  databaseURL: "https://project-94-1dc4d-default-rtdb.firebaseio.com",
  projectId: "project-94-1dc4d",
  storageBucket: "project-94-1dc4d.appspot.com",
  messagingSenderId: "417284297037",
  appId: "1:417284297037:web:82a17c9d421d0d0dd16704",
  measurementId: "G-HSGVR819NH"
};
firebase.initializeApp(firebaseConfig);

function addUser()
 {
     user_name=document.getElementById("user_name").value;
     firebase.database().ref("/").child(user_name).update({
         purpose:"Hello Welcome to the room My Name is Vaidehi "
     });
 }
