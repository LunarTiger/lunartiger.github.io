﻿let about_info = [
  ["Rev. Lunar", "it⁄its⁄any", "queer", "agender", "satanist", "giant‚ ugly bag of mostly water", "a conciousness trapped in a meat prison"],
  ["Hail Satanǃ"]
];
let contact_info = [
  ["Discord: rev_lunar", "Telegram: @Rev_Lunar", "Fediverse: @lunar@hell.social", "SpaceHey: /rev_lunar", "Phone: 540-692-6899"], // preferred
  ["Matrix: @rev_lunar:matrix.org", "Signal: 15406926899", "Telegram: @Rev_Lunar", "Wickr: lunartiger", "Wire: @rev_lunar"], // secure
  ["Discord: rev_lunar" ,"Revolt: Lunatics", "Snapchat: rev_lunar"], // messaging
  ["Mastodon: lunar@mas.to", "Pixelfed: lunar@gram.social", "Calckey: rev_lunar@hell.social"], // fediverse
  ["Instagram: rev_lunar", "SpaceHey: /rev_lunar", "TikTok: rev_lunar", "Twitch: Rev_Lunar"], // social
  ["SideQuest: Rev. Lunar", "Steam: rev_lunar", "Uplay: lunartiger1965", "VRChat: Rev. Lunar"], // gaming
  ["Cash App: $revlunar", "PayPal: lunartiger", "Revolut: revlunar", "Venmo: @rev_lunar"], // payme,
  ["Phone: 540-692-6899", "YouTube: @rev_lunar", "SoundCloud: Rev. Lunar", "Spotify:  Rev. Lunar", "GitHub: LunarTiger"] // other
];
let home_info = [
  ["placeholder", "info", "home"]
];
let projects_info = [
  ["placeholder", "info", "projects"]
];
let project_spaces = ["https://lunar-test.glitch.me"]
let unmade_info = [
  ["warning:", "space not found or not made"],
  ["Hail Satan!"]
];
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
  text.setAttribute('position', '0 0.03 0.06');
  text.setAttribute('value', value);
  text.setAttribute('font', font_face);
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

async function orderTablets(offset, this_info) {
  // create a new entity to contain the stuff
  let this_scene = document.createElement('a-entity'); this_scene.id = 'this-scene'; this_scene.setAttribute('position', offset+' 0 -10');
  // for each array in the master one create a tablet
  for (let i = 0; i < this_info.length; i++) {
    let tablet = await createTablet(this_info[i], '#00be00', '#000', (i*1.5)+' 0.055 0', '270 0 0');
    this_scene.appendChild(tablet);
  }
  document.querySelector('a-scene').appendChild(this_scene);
}

async function projectPortals(location, rotation, spaces) {
  let this_entity = document.createElement('a-entity'); this_entity.id = 'projet-portals'; this_entity.setAttribute('position', position);
  // loop through and create the portals
  for (let i = 0; i < spaces.length; i++) {
    // make a portal for each url in the spaces array
    let this_portal = document.createElement('a-link'); this_portal.setAttribute('position', (i*2)+' 0 -0.83'); this_portal.setAttribute('rotation', rotation); this_portal.setAttribute('href', spaces[i]);
    // add the portal to this_entity
    this_entity.appendChild(this_portal);
  }
// add this_entity to the portal-toggle button
document.querySelector('a-scene').appendChild(this_entity);
}

window.onload = () => {
  // let page_location = window.location.pathname;
  if(window.location.pathname == "/about" || window.location.pathname == "/about/") {
    orderTablets("-2", about_info);
  }
  else if(window.location.pathname == "/contact" || window.location.pathname == "/contact/") {
    orderTablets("-5", contact_info);
  }
  else if(window.location.pathname == "/projects" || window.location.pathname == "/projects/") {
    orderTablets("0", projects_info);
    projectPortals("19.4 1.42 19", "0 270 0", project_spaces);
  }
  else if(window.location.pathname == "/") {
   orderTablets("0", home_info);
  }
  else {
    orderTablets("-2", unmade_info);
  }
}