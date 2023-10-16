addEventListener("DOMContentLoaded", async() => {
	const raw_img = await fetch('img.json');
	const img = await raw_img.json();
	img(img);
});

function img(img){
	img.forEach((d, i) => {
		const this_img = document.createElement("img");
		this_img.alt = d.alt;
		this_img.src = "img/"+d.file;
		document.getElementById("img").appendChild(this_img);
	});
}