var config = {
	databaseURL: "https://worms-68137.firebaseio.com",
};
firebase.initializeApp(config);
var database = firebase.database();
var state = database.ref('state');
state.on('value', (function(snapshot) {
	var stateVal = snapshot.val();
	var id = database.ref('id');
	id.on('value', (function(snapshot) {
		var idVal = snapshot.val();
		if(!stateVal){
			document.getElementById('wormsembed').src = "https://www.youtube.com/embed/dQw4w9WgXcQ";
		}
		else{
			document.getElementById('wormsembed').src = "https://www.youtube.com/embed/"+idVal;
		}
	}));
}));