<script type="text/javascript">
	//document.getElementById('addin').href=window.location.origin+'/'+window.location.hash;
	if(window.location.hash=="#about"){
		window.location=window.location.origin+'/about';
	}
	if(window.location.hash=="#contact"){
		window.location=window.location.origin+'/contact';
	}
	if(window.location.hash=="#projects"){
		window.location=window.location.origin+'/projects';
	}
	else{
		document.getElementById('main_content').innerHTML += "<h2 id='home'>Home</h2>";
		document.getElementById('main_content').innerHTML += "<hr style='height:1px; visibility:hidden;' />";
		document.getElementById('main_content').innerHTML += "<img src='/img/me.jpg' alt='Ryan' height='315' width='315'/>";
		document.getElementById('main_content').innerHTML += "<p>Nobody exists on purpose,<br>nobody belongs anywhere,<br>everybody is going to die.</p>";
	}
</script>
