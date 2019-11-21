<h2 id="projects">Projects</h2>
<br>
<p><a href="/ovrtoggle">Oculus VR Toggle</a></p>
<p><a href='/lar'>Lovense API Redirect</a></p>
<div class="encase">
	<button class="collapsible" id="baby-shark" data-parent="baby-shark" data-child="baby-shark-child">Baby Shark</button>
	<div id="baby-shark-child" class="innertext center" data-parent="baby-shark">
		<p><a id="babyshark" href='/babyshark' data-parent="baby-shark">Baby Shark</a></p>
		<p><a id="babyshark-source" href='/babyshark/babyshark.js' data-parent="baby-shark">babyshark.js</a></p>
	</div>
	<button class="collapsible" id="altvr" data-parent="altvr" data-child="altvr-child">Altspace</button>
	<div id="altvr-child" class="innertext center" data-parent="altvr">
		<p><a id="stwl" href="/stwl" data-parent="altvr">Story Time with Lunar</a></p>
		<p><a id="altvr-world" href="https://account.altvr.com/worlds/954689156213113037" data-parent="altvr">Altspace Universe</a></p>
		<p><a id="tphub" href="/althub" data-parent="altvr">Altspace Teleport Hub</a></p>
		<p><a id="altvr-scripts" href="/AltspaceVR" data-parent="altvr">Altspace Scripts - Old API</a></p>
	</div>
	<button class="collapsible" id="other" data-parent="other" data-child="other-child">Other</button>
	<div id="other-child" class="innertext center" data-parent="other">
		<p><a href="/hypatia" data-parent="other">Hypatia Hints</a></p>
		<p><a href="https://lunartiger69.imgur.com/" target="_blank" data-parent="other">imgur albums</a></p>
	</div>
	<button class="collapsible" id="depreciated" data-parent="depreciated" data-child="depreciated-child">Depriciated</button>
	<div id="depreciated-child" class="innertext center" data-parent="depreciated">
		<p><a href='/fs-up' data-parent="depreciated">File Server</a></p>
		<p><a href='/Discord' data-parent="depreciated">Discord Add-Ons</a></p>
		<p><a href="/worms" data-parent="depreciated">Worms Live Stream</a></p>
		<!--<iframe id="wormsembed" allow="autoplay; encrypted-media" style="max-width:100%;height:320px;width:570px;border: 0px" allowfullscreen  data-parent="depreciated"></iframe>-->
	</div>
</div>
<script src="/assets/js/collapsible.js"></script>
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
