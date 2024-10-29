addEventListener("DOMContentLoaded", async() => {
  const quotesEl = document.getElementById('quotesgohere'), quotesURL="https://lunartiger.github.io/assets/quotes.json";
  if(quotesEl){
    let quotesJson = null;
    try{
      const quotes = await fetch(quotesURL);
      quotesJson = await quotes.json();
    }catch{};
    if((quotesEl.nodeName == "DETAILS") && quotesJson){ // display the whole list
      for(let i = 0; i < quotesJson.length; i++){
        //if(window.location.hostname == 'lunar.bant.ing'){quotesJson[i] = quotesJson[i].toLowerCase()};
        quotesEl.innerHTML += "<hr />"+quotesJson[i];
      };
      if(window.location.hostname == 'lunar.bant.ing'){quotesEl.innerHTML += "<hr />";};
    }else if(quotesJson){ // randomly choose a quote from the list and display it
      const displayQuote = quotesJson[Math.round(Math.random()*(quotesJson.length))];
      const quote = document.createElement("p");
      quote.style.fontSize = "1em";
      if(!!displayQuote){quote.innerHTML = displayQuote;}else{quote.innerHTML = "Hail thyself";}
      quotesEl.appendChild(quote);
      //quotesEl.innerHTML = "<p style=\"font-size:1em;\">"+displayQuote+"</p>";
    }else{ // hide the element if it failed to fetch the list
      quotesEl.style = "display:none;";
    };
  };
});