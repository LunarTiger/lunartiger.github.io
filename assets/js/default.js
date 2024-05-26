addEventListener("DOMContentLoaded", async() => {
  const quotesEl = document.getElementById('quotesgohere'), quotesurl="https://lunartiger.github.io/quotes.json";
  if(quotes){
    try{
      const quotes = await fetch(quotesurl);
      const quotesJson = await links.json();
      for(let i = 0; i < quotesJson.length; i++){
        quotesEl.innerHTML += "<hr />"+quotesJson[i];
      };
    }catch{
      quotesEl.innerHTML += "<mark>Loading failed :'(</mark>";
    };
  };
});