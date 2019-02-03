<h2 id="contact">Contact Me</h2>
<br>
<button class="collapsible" id="preferred">Preferred Methods</button>
<div class="innertext">
<p>Telegram:&nbsp;&nbsp;<a href="https://t.me/LunarTiger" target="_blank" id="telegram" data-parent="preferred">@LunarTiger</a></p>
<p>Discord:&nbsp;&nbsp;<a href="https://discordapp.com/users/206291426932293634" target="_blank" id="discord" data-parent="preferred">Lunar#6969</a></p>
<p>Snapchat:&nbsp;&nbsp;<a href="https://www.snapchat.com/add/dat1gui69" target="_blank" id="snapchat" data-parent="preferred">dat1gui69</a></p>
<p>Phone:&nbsp;&nbsp;<a href="tel:+15406926899" id="phone" data-parent="preferred">540-692-6899</a></p>
</div>
<!--<p id="discordserver">Discord Server:&nbsp;&nbsp;<a href="https://discord.me/lunatics" target="_blank">Lunatics</a></p>-->
<button class="collapsible" id="social">Social</button>
<div class="innertext">
	<p>Instagram:&nbsp;&nbsp;<a href="https://www.instagram.com/lunartiger69/" target="_blank" id="instagram" data-parent="social">lunartiger69</a></p>
	<p>Twitch:&nbsp;&nbsp;<a href="https://www.twitch.tv/lunartiger69" target="_blank" id="twitch" data-parent="social">LunarTiger69</a></p>
	<p>Twitter:&nbsp;&nbsp;<a href="https://twitter.com/LunarTiger69" target="_blank" id="twitter" data-parent="social">@LunarTiger69</a></p>
	<p>Facebook:&nbsp;&nbsp;<a href="https://www.facebook.com/lunartiger" target="_blank" id="facebook" data-parent="social">Ryan Fowler-Hughes</a></p>
	<p>Google+:&nbsp;&nbsp;<a href="https://plus.google.com/+RyanFowlerHughes" target="_blank" id="google" data-parent="social">Ryan Fowler-Hughes</a></p>
</div>
<button class="collapsible" id="gaming">Gaming</button>
<div class="innertext">
	<p>Steam:&nbsp;&nbsp;<a href="http://steamcommunity.com/id/lunartiger" target="_blank" id="steam" data-parent="gaming">lunartiger</a></p>
	<p>Xbox:&nbsp;&nbsp;<a href="https://account.xbox.com/profile?gamertag=lunartiger69" target="_blank" id="xbox" data-parent="gaming">lunartiger69</a></p>
	<p>PSN:&nbsp;&nbsp;<span style="color:#0ac139;" id="psn" data-parent="gaming">lunartiger69</span></p>
	<p>Battle.net:&nbsp;&nbsp;<span style="color:#0ac139;" id="battlenet" data-parent="gaming">LunarTiger69#1995</span></p>
</div>
<button class="collapsible" id="messaging">Messaging</button>
<div class="innertext">
	<p>ICQ:&nbsp;&nbsp;<a href="https://icq.com/people/726972398" target="_blank" id="icq" data-parent="messaging">726 972 398</a></p>
	<p>Marco Polo:&nbsp;&nbsp;<a href="http://reachmeonmp.com/s/ryan-f-oi3kW" target="_blank" id="marcopolo" data-parent="messaging">Ryan F</a></p>
	<p>Messenger:&nbsp;&nbsp;<a href="https://m.me/lunartiger" target="_blank" id="messenger" data-parent="messaging">lunartiger</a></p>
	<p>Kik&nbsp;&nbsp;<a href="https://kik.me/lunartiger" target="_blank" id="kik" data-parent="messaging">lunartiger</a></p>
	<p>WhatsApp:&nbsp;&nbsp;<a href="https://wa.me/15406926899" target="_blank" id="whatsapp" data-parent="messaging">lunartiger</a></p>
	<p>Wickr:&nbsp;&nbsp;<span style="color:#0ac139;" id="wickr" data-parent="messaging">lunartiger</span></p>
	<p>Wire:&nbsp;&nbsp;<span style="color:#0ac139;" id="wire" data-parent="messaging">@lunartiger</span></p>
</div>
<button class="collapsible" id="other">Other</button>
<div class="innertext">
	<p>E-mail:&nbsp;&nbsp;<a href="mailto:lunartiger@live.com" target="_top" id="email" data-parent="other">lunartiger@live.com</a></p>
	<p>GitHub:&nbsp;&nbsp;<a href="https://github.com/LunarTiger" target="_blank" id="github" data-parent="other">LunarTiger</a></p>
	<p>Spotify:&nbsp;&nbsp;<a href="spotify:user:tet6uf8yxoga59316ykeisk45" id="spotify" data-parent="other">Ryan Fowler-Hughes</a></p>
	<p>YouTube:&nbsp;&nbsp;<a href="https://www.youtube.com/user/69lunartiger" target="_blank" id="youtube" data-parent="other">Ryan Fowler-Hughes</a></p>
</div>
<script>
//set up collapsible elements
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.parentElement.nextElementSibling;
    if (content.style.maxHeight) {content.style.maxHeight = null;}
    else {content.style.maxHeight = content.scrollHeight + "px";} 
  });
}
//open relivant element like magic
if(window.location.hash){
	var director = document.getElementById(window.location.hash.substr(1));
	if (director != null && typeof director !== "undefined") {
		var clickButton = document.getElementById(director.dataset.parent)
		if (clickButton != null && typeof clickButton !== "undefined") {clickButton.click()}
		else {document.getElementById('preferred').click();}
	}
}
else {document.getElementById('preferred').click();}
</script>