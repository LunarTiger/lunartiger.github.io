(function(){
	if(window.location.hash){
		const goto = window.location.hash.substr(1).toLowerCase();
		switch(goto){
			case 'files': window.location.replace(window.location.origin+'/fs-up'); break;
			default: window.location.replace(window.location.origin+'/'+goto);
		};
	};
})();