
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA48AN8ayK-O3X-zBpHHt_rFLi7GGF6Dpc",
      authDomain: "kwitter-385e4.firebaseapp.com",
      projectId: "kwitter-385e4",
      storageBucket: "kwitter-385e4.appspot.com",
      messagingSenderId: "428808750513",
      appId: "1:428808750513:web:5ba89e68b67452df072990"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
