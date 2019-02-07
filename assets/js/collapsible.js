var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = document.getElementById(this.dataset.child)
    if (content.style.maxHeight) {content.style.maxHeight = null;}
    else {content.style.maxHeight = content.scrollHeight + "px";} 
  });
}
var default_open = document.getElementById('openme').click();
if (default_open != null && typeof default_open != undefined) {default_open = false;}
if(window.location.hash){
	var director = document.getElementById(window.location.hash.substr(1));
	if (director != null && typeof director != undefined) {
		var clickButton = document.getElementById(director.dataset.parent);
		if (clickButton != null && typeof clickButton != undefined) {clickButton.click();}
	} else {if (default_open) {default_open.click();}}
} else {if (default_open) {default_open.click();}}