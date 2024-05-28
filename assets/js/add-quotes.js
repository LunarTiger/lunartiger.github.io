addEventListener("DOMContentLoaded", async() => {
  const quotesEl = document.getElementById('quotesgohere'), quotesURL="https://lunartiger.github.io/assets/quotes.json";
  if(quotesEl){
    try{
      const quotes = await fetch(quotesURL);
      const quotesJson = await quotes.json();
      if((quotesEl.nodeName == "DETAILS") && quotesJson){ // display the whole list
        for(let i = 0; i < quotesJson.length; i++){
          if(window.location.hostname == 'lunar.bant.ing'){quotesJson[i] = quotesJson[i].toLowerCase()};
          quotesEl.innerHTML += "<hr />"+quotesJson[i];
        };
        if(window.location.hostname == 'lunar.bant.ing'){quotesEl.innerHTML += "<hr />";};
      }else if(quotesJson){ // randomly choose a quote from the list and display it
        quotesEl.innerHTML = "<p>"+quotesJson[Math.round(Math.random()*(quotesJson.length-1))]+"</p>";
      }else{ // hide the element if it failed to fetch the list
        quotesEl.style = "display:none;";
      };
    }catch{
      quotesEl.style = "display:none;";
    };
  };
});