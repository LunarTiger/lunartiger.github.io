<h2 id="projects">Projects</h2>
<p><a href="/hypatia">Hypatia Hints</a></p><hr style="height:1px; visibility:hidden;" />
<p><a href="/althub">Altspace Teleport Hub</a></p><hr style="height:1px; visibility:hidden;" />
<p><a href="/worms">Worms Live Stream</a></p>
<iframe id="wormsembed" allow="autoplay; encrypted-media" style="max-width:100%;height:320px;width:570px;border: 0px" allowfullscreen></iframe><hr style="height:1px; visibility:hidden;" />
<p><a href="https://account.altvr.com/worlds/954689156213113037">Altspace World</a></p><hr style="height:1px; visibility:hidden;" />
<p><a href="/AltspaceVR/">Altspace Scripts</a></p><hr style="height:1px; visibility:hidden;" />
<p><a href="https://lunartiger69.imgur.com/" target="_blank">imgur albums</a></p><hr style="height:1px; visibility:hidden;" />
<p><a href='http://lunar.zapto.org'>File Server</a> - may be<br>down unexpectedly</p><hr style="height:1px; visibility:hidden;" />
<p><a href='/Discord'>Discord Add-Ons</a></p>
<script src="https://www.gstatic.com/firebasejs/5.1.0/firebase-app.js"></script>
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
</script>