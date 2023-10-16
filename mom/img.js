addEventListener("DOMContentLoaded", async() => {
	const img = await fetch('img.json');
	const html = document.createElement("p");
	img.forEach((d, i) => {
		const this_img = document.createElement("img");
		this_img.alt = d.alt;
		this_img.src = "img/"+d.file;
		this_img.appendChild(html);
	});
	document.getElementById("img").innerHTML = html;
	for (l=0; l<alt.length; l++){
		document.body.innerHTML += "<p><img src='img/"+l+".jpg' alt='"+alt[l]+"'></img><br />"+alt[l]+"</p><hr style='height:5px; visibility:hidden;' />";
	}
});
