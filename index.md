<!--
<h2 id="home">Home</h2>
<hr style="height:1px; visibility:hidden;" />
<img src="/img/me.jpg" alt="Ryan" height="315" width="315"/>
<p>Nobody exists on purpose,<br>nobody belongs anywhere,<br>everybody is going to die.</p>
<!--<p><a id="addin" target="_blank">Test Link</a></p>-->
<section id="homepage" style="text-align:center">
</section>

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
		var content = document.getElementById('homepage');
		content.document.open();
		content.document.write("<h2 id='home'>Home</h2>");
		content.document.write("<hr style='height:1px; visibility:hidden;' />");
		content.document.write("<img src='/img/me.jpg' alt='Ryan' height='315' width='315'/>");
		content.document.write("<p>Nobody exists on purpose,<br>nobody belongs anywhere,<br>everybody is going to die.</p>");
		content.document.close()
	}
</script>
