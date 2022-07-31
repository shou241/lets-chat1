// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyBhqCqwFUUz_wM9uep4qfk6JJvpTBbjslI",
	authDomain: "tweet-110a6.firebaseapp.com",
  	databaseURL: "https://tweet-110a6-default-rtdb.firebaseio.com",
  	projectId: "tweet-110a6",
 	storageBucket: "tweet-110a6.appspot.com",
	messagingSenderId: "651481533114",
	appId: "1:651481533114:web:bf162bab610aede0039083"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//FIREBASE LINKS on top


    var user_name = localStorage.getItem("USERNAME");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!!!";

    function addRoom() {
      var room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room"
      })
      alert("Room Created!");
      document.getElementById("room_name").value = "";
      localStorage.setItem("Roomname" , room_name);
      window.location = "page.html";
    }

    function logout() {
      window.location = "index.html";
      localStorage.removeItem("USERNAME");
      localStorage.removeItem("Roomname");
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names); 
      row = "<div class='room_name' id="+Room_names+
      " onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

    function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("Roomname" , name);
      window.location = "page.html";
    }
