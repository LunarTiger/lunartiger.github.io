addEventListener("DOMContentLoaded", async() => {
  const quotesEl = document.getElementById('quotesgohere'), quotesURL="https://lunartiger.github.io/quotes.json";
  if(quotesEl){
    //try{
      const quotes = await fetch(quotesURL);
      const quotesJson = await links.json();
      for(let i = 0; i < quotesJson.length; i++){
        quotesEl.innerHTML += "<hr />"+quotesJson[i];
      };
    //}catch{
    //  quotesEl.innerHTML += "<mark>Loading failed :'(</mark>";
    //};
  };
});