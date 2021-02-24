
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAlDEROpOjXPpHD0V6SdOPTxfWYCBFWaLs",
      databaseURL:"https://kwitter-f82c7-default-rtdb.firebaseio.com/",
      authDomain: "kwitter-f82c7.firebaseapp.com",
      projectId: "kwitter-f82c7",
      storageBucket: "kwitter-f82c7.appspot.com",
      messagingSenderId: "150666213475",
      appId: "1:150666213475:web:97ab76904a275371372056"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("welcome_user").innerHTML="Welcome "+user_name;
    function logout(){
          window.location="index.html";
          localStorage.removeItem("user_name")
    }
    function create_room(){
          Room_Name=document.getElementById("room_input").value;
          localStorage.setItem("room_input",Room_Name);
          firebase.database().ref("/").child(Room_Name).update({
                purpose:"addingRoomName"
          });
          window.location="kwitter_page.html";

          
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      document.getElementById("output").innerHTML+="<div class='room_name' id='"+Room_names+"' onclick='redirectToRoom_Name(this.id)'>"+Room_names+"</div>";
      //End code
      });});}
getData();
function redirectToRoom_Name(name){
      localStorage.setItem("room_input",name);
      window.location="kwitter_page.html";
}
