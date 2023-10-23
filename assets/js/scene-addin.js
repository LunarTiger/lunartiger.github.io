let about_info = [
  ["Rev. Lunar", "it⁄its⁄any", "queer", "agender", "satanist", "giant‚ ugly bag of mostly water", "a conciousness trapped in a", " meat prison"],
  ["jan sewi Wijan", "ona", "kule", "tonsi", "jan pi nasin sewi Setan", "poki telo pi ike lukin","pi monsuta suli", "kon jan li ken ala weka","e tomo pi jan ike","pi ko soweli"],
  ["o ale e jan Setan a"]
];
let contact_info = [
  ["Discord: rev_lunar", "Telegram: @Rev_Lunar", "Fediverse: @lunar@hell.social", "SpaceHey: /rev_lunar", "Phone: 540-692-6899"], // preferred
  ["Matrix: @rev_lunar:matrix.org", "Signal: 15406926899", "Telegram: @Rev_Lunar", "Wickr: lunartiger", "Wire: @rev_lunar"], // secure
  ["Discord: rev_lunar" ,"Revolt: Lunatics", "Snapchat: rev_lunar"], // messaging
  ["Mastodon: lunar@mas.to", "Pixelfed: lunar@gram.social", "Calckey: rev_lunar@hell.social"], // fediverse
  ["Instagram: rev_lunar", "SpaceHey: /rev_lunar", "TikTok: rev_lunar", "Twitch: Rev_Lunar"], // social
  ["SideQuest: Rev. Lunar", "Steam: rev_lunar", "Uplay: lunartiger1965", "VRChat: Rev. Lunar"], // gaming
  ["Cash App: $revlunar", "PayPal: lunartiger", "Revolut: revlunar", "Venmo: @rev_lunar"], // payme
  ["Phone: 540-692-6899", "YouTube: @rev_lunar", "SoundCloud: Rev. Lunar", "Spotify:  Rev. Lunar", "GitHub: LunarTiger"] // other
];
let home_info = [
  ["welcome to", "my website"]
];
let projects_info = [];
let font_face = "https://lunartiger.github.io/assets/fonts/comic_sans/comic.ttf"

// function to create a box and text
async function createTablet(this_array, txt_color, box_color, position, rotation) {
  //create box
  let box = document.createElement('a-box');
  box.setAttribute('color', box_color);
  box.setAttribute('position', position);
  box.setAttribute('rotation', rotation);
  box.setAttribute('depth', '0.05');
  box.setAttribute('width', '1.42');
  box.setAttribute('height', 0.3*this_array.length);
  box.setAttribute('sq-collider', true);
  box.setAttribute('sq-grabbable', true);
  box.setAttribute('sq-rigidbody', 'mass: 0.3; useGravity: true;');
  // create text
  let value = await stringifyArray(this_array);
  let text = document.createElement('a-text');
  text.setAttribute('color', txt_color);
  text.setAttribute('position', '0 0 0.03');
  text.setAttribute('value', value);
  // text.setAttribute('font', font_face); // font faces don't work in Banter :'(
  text.setAttribute('scale', '0.5 1 0.5');
  text.setAttribute('align', 'center');
  // parent the text to the box and return the box
  box.appendChild(text);
  return box;
}

async function stringifyArray(this_array) {
  let this_string = "";
  for (let i = 0; i < this_array.length; i++) {
    this_string = this_string+this_array[i]+"\n";
  }
  return this_string;
}

async function orderTablets(position, rotation, group_id, this_info) {
  // create a new entity to contain the stuff
  let this_scene = document.createElement('a-entity'); this_scene.id = group_id; this_scene.setAttribute('position', position); this_scene.setAttribute('rotation', "0 "+rotation+" 0");
  // for each array in the master one create a tablet
  for (let i = 0; i < this_info.length; i++) {
    let tablet = await createTablet(this_info[i], '#00be00', '#000', (i*1.5)+' 0.055 0', '270 0 0');
    this_scene.appendChild(tablet);
  }
  document.querySelector('a-scene').appendChild(this_scene);
}

async function projectPortals(position, rotation) {
  const portals = await fetch('https://lunartiger.github.io/banter/my_spaces.json');
  const portalJson = await portals.json();
  const portalParent = makeProjectPortals('project-portals', portalJson, position, rotation);
  portalParent.setAttribute('visible', true);
}

function makeProjectPortals(button, portal_array, position, rotation) {  
  
  let existing = document.createElement('a-entity');
  existing.id = button.id+'-holder';
  existing.setAttribute('position', position);
  existing.setAttribute('visible', false);
  document.querySelector('a-scene').appendChild(existing);
  
  // Add the new portals based on the array
  for (let i = 0; i < portal_array.length; i++) {
    let this_portal =  document.createElement('a-link'); 
    this_portal.setAttribute('position', '0 0 -'+(i*2));
    this_portal.setAttribute('rotation', "0 "+rotation+" 0");
    this_portal.setAttribute('href', portal_array[i]);
    existing.appendChild(this_portal);
  }
  
  // return the portal parent
  return existing;
}

addEventListener("DOMContentLoaded", async() => {
  if(window.isBanter){
    let page_location = window.location.pathname;
    if(page_location == "/about") {
      orderTablets("-2 0.055 -10", "0", "about-info", about_info);
    }
    else if(page_location == "/contact") {
      orderTablets("-5 0.055 -10", "0", "contact_info", contact_info);
    }
    else if(page_location == "/projects") {
      orderTablets("0 0.055 -10", "0", "projects-info", projects_info);
      projectPortals("18.57 0.3 18.57", "270");
    }
    else if(page_location == "/") {
     orderTablets("0 0.055 -10", "0", "home-info", home_info);
    }
    else {
      orderTablets("0 0.055 -10", "0", "warning-info", [["warning:", "not found or not made"]]);
    }
    orderTablets("-10 0 0", "90", "hail-satan", [["Hail Satan!"]])
    orderTablets("0 0.055 10", "180", "window-pathname", [["window.location.pathname", page_location]])
  }
});