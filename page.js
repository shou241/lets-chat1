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

user_name = localStorage.getItem("USERNAME");
console.log("namein js " + user_name);
var room_name = localStorage.getItem("Roomname");













getData();
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
    console.log(firebase_message_id);
       console.log(message_data);
       name = message_data['name'];
       console.log("name = " + name)
       message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

   row = name_with_tag + message_with_tag +like_button + span_with_tag;       
   document.getElementById("output").innerHTML += row;
//End code
 } });  }); }
























function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
         name : user_name,
         message : msg,
         like : 0
    });
    document.getElementById("msg").value = "";

}



function updateLike(message_id)
{
console.log("clicked on like button - " + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);
console.log("-------"+message_id);

firebase.database().ref(room_name).child(message_id).update({
     like : updated_likes  
 });

}

function logout() {
    window.location = "index.html"
    localStorage.removeItem("USERNAME");
    localStorage.removeItem("Roomname");
}