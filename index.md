<script type="text/javascript">
	if(window.location.hash=="#about"){
		window.location=window.location.origin+'/about';
	}
	else if(window.location.hash=="#contact"){
		window.location=window.location.origin+'/contact';
	}
	else if(window.location.hash=="#projects"){
		window.location=window.location.origin+'/projects';
	}
	else{
		document.getElementById('main_content').innerHTML += "<h2 id='home'>Home</h2>";
		document.getElementById('main_content').innerHTML += "<hr style='height:1px; visibility:hidden;' />";
		document.getElementById('main_content').innerHTML += "<img src='/img/me.jpg' alt='Ryan' height='315' width='315'/>";
		document.getElementById('main_content').innerHTML += "<p>Nobody exists on purpose,<br>nobody belongs anywhere,<br>everybody is going to die.</p>";
	}
</script>
<a class="twitter-timeline" data-width="315" data-height="500" data-theme="dark" data-link-color="#19CF86" href="https://twitter.com/LunarTiger69?ref_src=twsrc%5Etfw">Tweets by LunarTiger69</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
