addEventListener("DOMContentLoaded", async() => {
  const quotesEl = document.getElementById('quotesgohere'), quotesURL="https://lunartiger.github.io/assets/quotes.json";
  if(quotesEl){
    try{
      const quotes = await fetch(quotesURL);
      const quotesJson = await quotes.json();
      for(let i = 0; i < quotesJson.length; i++){
        if(window.location.hostname == 'lunar.bant.ing'){quotesJson[i] = quotesJson[i].toLowerCase()};
        quotesEl.innerHTML += "<hr />"+quotesJson[i];
      };
      if(window.location.hostname == 'lunar.bant.ing'){quotesEl.innerHTML += "<hr />";};
    }catch{
      quotesEl.style = "display:none;";
    };
  };
});