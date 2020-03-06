var musicconfig = {
	databaseURL: "https://music-embed.firebaseio.com/",
};
firebase.initializeApp(musicconfig);
var database = firebase.database();
var state = database.ref('state');
state.on('value', (function(snapshot) {
	var stateVal = snapshot.val();
	if(stateVal){
		var id = database.ref('id');
		id.on('value', (function(snapshot) {
			var idVal = snapshot.val();
			document.getElementById('musicembed').style = "max-width:100%;height:197px;width:350px;border: 0px"
			document.getElementById('musicembed').src = "https://www.youtube.com/embed/"+idVal+"?rel=0;&autoplay=1";
		}));
	}
	if(!stateVal){
		document.getElementById('musicembed').style = "max-width:0px;height:0px;width:0px;border: 0px"
		document.getElementById('musicembed').src = "";
	}
}));
