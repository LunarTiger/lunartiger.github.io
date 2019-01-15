<h2 id="projects">Projects</h2>
<br>
<p><a href="/ovrtoggle">Oculus VR Toggle</a></p>
<p><a href="/noad">Add Free Hosts File</a></p>
<p><a href="/hypatia">Hypatia Hints</a></p>
<p id="fileserver">Checking status of lunar.zapto.org</p>
<br>
<h3>Altspace</h3>
<p><a href="/althub">Altspace Teleport Hub</a></p>
<p><a href="/AltspaceVR/">Altspace Scripts</a></p>
<p><a href="https://account.altvr.com/worlds/954689156213113037">Altspace World</a></p>
<br>
<h3>Other</h3>
<p><a href='/Discord'>Discord Add-Ons</a></p>
<p><a href="https://lunartiger69.imgur.com/" target="_blank">imgur albums</a></p>
<!--<p><a href="/worms">Worms Live Stream</a></p>
<iframe id="wormsembed" allow="autoplay; encrypted-media" style="max-width:100%;height:320px;width:570px;border: 0px" allowfullscreen></iframe><hr style="height:1px; visibility:hidden;" />-->

<script type='text/javascript'>
	function isSiteOnline(url,callback) {
		// try to load favicon
		var timer = setTimeout(function(){
			// timeout after 5 seconds
			callback(false);
		},5000)

		var img = document.createElement("img");
		img.onload = function() {
			clearTimeout(timer);
			callback(true);
		}

		img.onerror = function() {
			clearTimeout(timer);
			callback(false);
		}
		// add timestamp to bust the cache
		img.src = url+"/favicon.ico?"+(new Date().getTime());
	}

	isSiteOnline("http://lunar.zapto.org",function(result){
		if(result) {document.getElementById('fileserver').innerHTML = "<a href='http://lunar.zapto.org'>File Server</a>";}
		else {document.getElementById('fileserver').innerHTML = "lunar.zapto.org is offline :(<br>However, you can check out <a href='/fs-mirror'>this mirror</a>";}
	})
</script>
<!--<script src="https://www.gstatic.com/firebasejs/5.1.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.1.0/firebase-database.js"></script>
<script>
	// Initialize Firebase
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
</script>-->