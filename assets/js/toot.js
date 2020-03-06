var tootconfig = {
	databaseURL: "https://toot-embed.firebaseio.com/",
};
firebase.initializeApp(tootconfig);
var database = firebase.database();
var toot = database.ref('toot');
state.on('value', (function(snapshot) {
	var tootVal = snapshot.val();
	if(tootVal){
		document.getElementById('tootembed').width = "400"
		document.getElementById('tootembed').style = "max-width: 100%; border: 0"
		document.getElementById('tootembed').src = "https://mas.to/@lunar/"+tootVal+"/embed";
	}
	if(!tootVal){
		document.getElementById('tootembed').width = "0"
		document.getElementById('tootembed').style = "max-width:0px;height:0px;border: 0"
		document.getElementById('tootembed').src = "about:blank";
	}
}));