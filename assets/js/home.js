var config = {
	databaseURL: "https://lunar-home.firebaseio.com/",
};
firebase.initializeApp(config);
var database = firebase.database();
//Event
var event = database.ref('stwl/next-event');
event.on('value', (function(snapshot) {
	var eventVal = snapshot.val();
	if(eventVal){
		document.getElementById('story-time').innerHTML = "<p><a href='/stwl'>Story Time with Lunar</a><br />Next Event:&nbsp; "+eventVal+"<br />Join the <a href='https://discord.gg/DbQF7ze'>discord</a>.</p>";
	}
	if(!eventVal){
		document.getElementById('story-time').innerHTML = "<p>Check out the <a href='/stwl/archive'>archive</a> or join the <a href='https://discord.gg/DbQF7ze'>discord</a>.</p>";
	}
}));
//Location
var place = [
    "You can <a href='/contact'>contact me</a>.",
    "I'm <a href='https://www.google.com/maps/place/293+Babbs+Mountain+Rd,+Winchester,+VA+22603/@39.2744651,-78.1799907,17z/data=!3m1!4b1!4m5!3m4!1s0x89b5f115682b0d49:0xa79fd3617adf6fc!8m2!3d39.274461!4d-78.177802' target='_blank'>home</a>.",
	"I'm not home.",
	"I'm out with my dad, Lanny. He can be contacted at <a href='tel:+15403279023'>1-540-327-9023</a>.",
    "I'm out with my mom, Shelva. She can be contacted at <a href='tel:+13048204338'>1-304-820-4338</a>."
];
var loc = database.ref('lunar/location');
loc.on('value', (function(snapshot) {
	var locVal = snapshot.val();
	document.getElementById('lunar-location').class = "encase";
	if(locVal){
		if(locVal=="home"){
			document.getElementById('lunar-location').innerHTML = "<p>"+place[1]+" "+place[0]+"</p>";
		}
		else if(locVal=="away"){
			document.getElementById('lunar-location').innerHTML = "<p>"+place[2]+" "+place[0]+"</p>";
		}
		else if(locVal=="dad"){
			document.getElementById('lunar-location').innerHTML = "<p>"+place[3]+" "+place[0]+"</p>";
		}
		else if(locVal=="mom"){
			document.getElementById('lunar-location').innerHTML = "<p>"+place[4]+" "+place[0]+"</p>";
		}
		else{
			document.getElementById('lunar-location').innerHTML = "<p>"+locVal+" "+place[0]+"</p>";
		}
	}
	if(!locVal){
		document.getElementById('lunar-location').innerHTML = "<p>¯\_(ツ)_/¯ "+place[0]+"</p>";
	}
}));
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
//Post-Message
var message = database.ref('post-message/html');
message.on('value', (function(snapshot) {
	var messageVal = snapshot.val();
	if(messageVal){
		document.getElementById('messageembed').class = "encase";
		document.getElementById('messageembed').innerHTML = "<p>"+messageVal+"</p>";
	}
	if(!messageVal){
		document.getElementById('messageembed').class = "innertext";
		document.getElementById('messageembed').innerHTML = "";
	}
}));
