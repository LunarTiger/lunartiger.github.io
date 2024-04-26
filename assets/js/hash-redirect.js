((){
	if(window.location.hash){
		const goto = window.location.hash.substr(1).toLowerCase();
		switch(goto){
			case 'files': window.location.replace(window.location.origin+'/fs-up'); break;
			case 'revolt': window.location.replace('https://rvlt.gg/QwvVQrEA'); break;
			default: window.location.replace(window.location.origin+'/'+goto);
		};
	};
})();