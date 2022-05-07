const firebaseConfig = {
      apiKey: "AIzaSyBSzjoNDhkzdodwxB8eo8M-blvAlj8begc",
      authDomain: "c94-practice-33d0d.firebaseapp.com",
      databaseURL: "https://c94-practice-33d0d-default-rtdb.firebaseio.com",
      projectId: "c94-practice-33d0d",
      storageBucket: "c94-practice-33d0d.appspot.com",
      messagingSenderId: "178705016832",
      appId: "1:178705016832:web:0f0ac3777df10e2cc190e5",
    
    };
    
    // Initialize Firebase
    
    
    
    
      firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
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
    