<h2 id="projects">Projects</h2>
<br>
<p><a href="/ovrtoggle">Oculus VR Toggle</a></p>
<p><a href="/noad">Ad Free Hosts File</a></p>
<p><a href='/lar'>Lovense API Redirect</a></p>
<p><a href='/fs-up'>File Server</a></p>
<div class="encase">
	<button class="collapsible" id="altvr" data-parent="altvr" data-child="altvr-child">Altspace</button>
	<div id="altvr-child" class="innertextcenter" data-parent="altvr">
		<br>
		<p><a href="/althub" data-parent="altvr">Altspace Teleport Hub</a></p>
		<p><a href="/AltspaceVR/" data-parent="altvr">Altspace Scripts</a></p>
		<p><a href="https://account.altvr.com/worlds/954689156213113037" data-parent="altvr">Altspace World</a></p>
	</div>
	<button class="collapsible" id="other" data-parent="other" data-child="other-child">Other</button>
	<div id="other-child" class="innertextcenter" data-parent="other">
		<br>
		<p><a href='/Discord' data-parent="other">Discord Add-Ons</a></p>
		<p><a href="https://lunartiger69.imgur.com/" target="_blank" data-parent="other">imgur albums</a></p>
		<p><a href="/hypatia" data-parent="other">Hypatia Hints</a></p>
	</div>
</div>
<!--<p><a href="/worms">Worms Live Stream</a></p>
<iframe id="wormsembed" allow="autoplay; encrypted-media" style="max-width:100%;height:320px;width:570px;border: 0px" allowfullscreen></iframe><hr style="height:1px; visibility:hidden;" />

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
<!---->
<script src="/assets/js/collapsible.js"></script>
