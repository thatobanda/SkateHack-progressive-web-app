(function(){
	
	
	
 var config = {
    apiKey: "AIzaSyBPkPjyFhR0UI-lAjOXDosf3qzhncV5Nto",
    authDomain: "skatehack-a6889.firebaseapp.com",
    databaseURL: "https://skatehack-a6889.firebaseio.com",
    projectId: "skatehack-a6889",
    storageBucket: "",
    messagingSenderId: "227923109886"
  };
  firebase.initializeApp(config);
  
  var object=document.getElementById('skate');
  
  var database = firebase.database();
  var skateRef=database.ref().child('skate');
  
  
  
    skateRef.on('value', snap=> console.log(snap.val())
	
	
	);
	
	
	//sync list as it changes
	
	
	skateRef.on('child_changed',snap=> {
		
		
		var liChanged=document.getElementById(snap.key);
		
		liChanged.innerText=snap.val();
		
	});

   	
 
}());
    
	
