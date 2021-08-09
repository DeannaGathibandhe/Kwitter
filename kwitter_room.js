var firebaseConfig = {
      apiKey: "AIzaSyCy6wm3HIYnlZ3seUpMayvbJ2hceuisgZM",
      authDomain: "kwitter-ec478.firebaseapp.com",
      databaseURL: "https://kwitter-ec478-default-rtdb.firebaseio.com",
      projectId: "kwitter-ec478",
      storageBucket: "kwitter-ec478.appspot.com",
      messagingSenderId: "1093587375431",
      appId: "1:1093587375431:web:3669ab9a011f211d7be862"
    };

    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
    }

    function getData(){
          firebase.database().ref("/").on('value', function(snapshot)
          {
                document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot)
                {
                      childKey = childSnapshot.key; Room_names = childKey;
                      console.log("Room Name - " + Room_names); 
                      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                      document.getElementById("output").innerHTML += row;
                  }); }); }
                  getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}