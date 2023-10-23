if(window.location.hash){
	var goto = window.location.hash.substr(1);
	if(goto=="files"){window.location=window.location.origin+'/fs-up';}
	else if(goto=="revolt"){window.location='https://rvlt.gg/QwvVQrEA';}
	else {window.location=window.location.origin+'/'+goto;}
}
