
var firebaseConfig = {
    apiKey: "AIzaSyBvE4nYHn7i1f4Og28aQaQhicOra1P84QA",

    authDomain: "lets-chat-1ada1.firebaseapp.com",

    databaseURL: "https://lets-chat-1ada1-default-rtdb.firebaseio.com",

    projectId: "lets-chat-1ada1",

    storageBucket: "lets-chat-1ada1.appspot.com",

    messagingSenderId: "708767853568",

    appId: "1:708767853568:web:6a460d719452fdd5f4fce5",

    measurementId: "G-TPELWZPC83"
    
  };
  
  // Initialize Firebase

firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}