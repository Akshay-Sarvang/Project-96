
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


function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
      }


      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       //Start code
       console.log("Room Name - "+ Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
       //End code
       });});}
 getData();
 
 function redirectToRoomName(name)
 {
       console.log(name);
       localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
 }
 function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location = "index.html";
}