addEventListener("DOMContentLoaded", async() => {
  if(window.isBanter){
    window.loadDoneCallback = async() => {
      lockPlayer();
      const place = await randomSpace();
      if(!!place){openPage(place);}
    }
  }else{
    let holder = document.getElementById("random-link");
    if(!holder){return;}
    holder.innerHTML = "Loading . . .";
    const place = await randomSpace();
    if(!!place){holder.innerHTML = "<a href=\""+place+"\">click me</a>";}
  }
});

async function randomSpace() {
  let hub = 'banter://hub.bant.ing';
  const raw_users = await fetch('https://rev.lunar.gay/althub/user-buttons.json');
  if(!raw_users){return hub;}
  const users = await raw_users.json();
  if(!users){return hub;}
  const raw_user_spaces = await fetch(users[(Math.round(Math.random()*(users.length-2)))].url);
  if(!raw_user_spaces){return hub;}
  const user_spaces = await raw_user_spaces.json();
  if(!user_spaces){return hub;}
  let space = user_spaces[(Math.round(Math.random()*(user_spaces.length-1)))].replace("https://", "banter://").replace("http://", "banter://");
  if(!space){return hub;}else{return space;}
}