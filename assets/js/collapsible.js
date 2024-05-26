(function(){
	const coll = document.getElementsByClassName("collapsible"), default_open = document.getElementById('openme');
	var i;
	/*if(document.getElementById("payme") && document.getElementById("payment") && coll) {
		const new_button = document.getElementById("payment");
		coll.push([{new_button}]);
	}*/
	if (coll) {
		for (i = 0; i < coll.length; i++) {
			coll[i].addEventListener("click", function() {
				this.classList.toggle("active");
				const content = document.getElementById(this.dataset.child);
				if (content.style.maxHeight) {content.style.maxHeight = null;}
				else {content.style.maxHeight = content.scrollHeight + "px";} 
			});
		};
	};
	if (document.getElementById(window.location.hash.substr(1))) {
		document.getElementById(document.getElementById(window.location.hash.substr(1)).dataset.parent).click();
	}else if (default_open) {default_open.click();};
})();