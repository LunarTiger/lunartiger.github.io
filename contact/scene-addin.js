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

// function to create a box and text
async function createTablet(this_array, txt_color, box_color, position, rotation) {
  //create box
  let box = document.createElement('a-box');
  box.setAttribute('color', box_color);
  box.setAttribute('position', position);
  box.setAttribute('rotation', rotation);
  box.setAttribute('depth', '0.05');
  box.setAttribute('width', 0.03*this_array.length);
  box.setAttribute('height', '0.3');
  box.setAttribute('sq-collider', true);
  box.setAttribute('sq-grabbable', true);
  box.setAttribute('sq-rigidbody', 'mass: 0.3; useGravity: true;');
  // create text
  let value = await stringifyArray(this_array);
  let text = document.createElement('a-text');
  text.setAttribute('color', txt_color);
  text.setAttribute('position', '0 0.03 0.06');
  text.setAttribute('value', value);
  text.setAttribute('align', 'center');
  // parent the text to the box and return the box
  box.appendChild(text);
  console.log("tablet created: "+this_array)
  return box;
}

async function stringifyArray(this_array) {
  let this_string = "";
  for (let i = 0; i < this_array.length; i++) {
    this_string = this_string+this_array[i]+"\n";
  }
  return this_string;
}

async function main() {
  // create a new entity to contain the contact stuff
  let contact_scene = document.createElement('a-entity'); contact_scene.id = 'contact-scene'; contact_scene.setAttribute('position', '0 0 -10');
  // for each array in the master one create a tablet
  for (let i = 0; i < contact_info.length; i++) {
    let tablet = await createTablet(contact_info[i], '#00be00', '#000', i+' 0.5 0', '0 0 0');
    contact_scene.appendChild(tablet);
    console.log("child appended. i="+i)
  }
  document.querySelector('a-scene').appendChild(contact_scene);
}

main();