if(window.location.hash){
	var goto = window.location.hash.substr(1);
	if(goto=="files"){window.location=window.location.origin+'/fs-up';}
	else if(goto=="lunarverse"){window.location='https://account.altvr.com/worlds/954689156213113037';}
	else if(goto=="spacesarchive"){window.location='https://account.altvr.com/worlds/1349925732620436463';}
	else {window.location=window.location.origin+'/'+goto;}
}
