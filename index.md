<h2 id="about">Home</h2>
<hr style="height:1px; visibility:hidden;" />
<img src="/img/me.jpg" alt="Ryan" height="315" width="315"/>
<p>Nobody exists on purpose,<br>nobody belongs anywhere,<br>everybody is going to die.</p>
<!--<p><a id="addin" target="_blank">Test Link</a></p>-->

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
</script>