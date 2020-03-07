var config = {
	databaseURL: "https://lunar-home.firebaseio.com/",
};
firebase.initializeApp(config);
var database = firebase.database();
//Toot
var toot = database.ref('mastodon/toot');
toot.on('value', (function(snapshot) {
	var tootVal = snapshot.val();
	if(tootVal){
		document.getElementById('tootembed').width = "400";
		document.getElementById('tootembed').style = "max-width: 100%;height:187;border: 0";
		document.getElementById('tootembed').src = tootVal+"/embed";
	}
	if(!tootVal){
		document.getElementById('tootembed').width = "0";
		document.getElementById('tootembed').style = "max-width:0px;height:0px;border: 0";
		document.getElementById('tootembed').src = "";
	}
}));
//Music
var id = database.ref('music-embed/id');
id.on('value', (function(snapshot) {
	var idVal = snapshot.val();
	if(idVal){
		document.getElementById('musicembed').style = "max-width:100%;height:197px;width:350px;border: 0px";
		document.getElementById('musicembed').src = "https://www.youtube.com/embed/"+idVal+"?rel=0;&autoplay=0";
	}
	if(!idVal){
		document.getElementById('musicembed').style = "max-width:0px;height:0px;width:0px;border: 0px";
		document.getElementById('musicembed').src = "";
	}
}));
