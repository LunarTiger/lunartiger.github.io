var config = {
	databaseURL: "https://music-embed.firebaseio.com/",
};
firebase.initializeApp(config);
var database = firebase.database();
var state = database.ref('state');
state.on('value', (function(snapshot) {
	var id = database.ref('id');
	id.on('value', (function(snapshot) {
		var idVal = snapshot.val();
		document.getElementById('musicembed').src = "https://www.youtube.com/embed/"+idVal;
	}));
}));