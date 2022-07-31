function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("USERNAME" , user_name );
    window.location = "rooms.html";
}