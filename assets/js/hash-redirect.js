if(window.location.hash){
	const goto = window.location.hash.substr(1);
	console.log(goto);
	if(goto=="files"){window.location.replace=window.location.origin+'/fs-up';}
	else if(goto=="revolt"){window.location.replace='https://rvlt.gg/QwvVQrEA';}
	else {window.location.replace=window.location.origin+'/'+goto;}
}
