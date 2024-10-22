// get an array of the user set properties
const sq_community_currentScript = Array.from(document.getElementsByTagName('script')).slice(-1)[0];
addEventListener("DOMContentLoaded", () => {
  if(!window.isBanter){return;}
  // set the variables from the array of user properties
  let position = sq_community_currentScript.getAttribute("position");
  let rotation = sq_community_currentScript.getAttribute("rotation");
  let scale = sq_community_currentScript.getAttribute("scale");
  let text_color = sq_community_currentScript.getAttribute("text_color");
  if(text_color){console.warn("Community Hub Button: text_color is depricated, please use text-color. if you don't it'll still work tho, ya cheeky fucker.");}
  let button_color = sq_community_currentScript.getAttribute("button_color");
  if(button_color){console.warn("Community Hub Button: button_color is depricated, please use button-color. if you don't it'll still work tho, ya cheeky fucker.");}
  if(sq_community_currentScript.getAttribute("text-color")){text_color = sq_community_currentScript.getAttribute("text-color");}
  if(sq_community_currentScript.getAttribute("button-color")){button_color = sq_community_currentScript.getAttribute("button-color");}
  console.log("Community Hub Button:\nposition = "+position+"\nrotation = "+rotation+"\nscale = "+scale+"\ntext-color = "+text_color+"\nbutton-color = "+button_color);
  // set the defaults for the values if the user hasn't
  if(!position){position = '0 1.5 0';}
  if(!rotation){rotation = '0 0 0';}
  if(!scale){scale = '1';}
  if(!text_color){
    const txt_red = Math.round(Math.random()*255).toString(16).padStart(2, '0');
    const txt_green = Math.round(Math.random()*255).toString(16).padStart(2, '0');
    const txt_blue = Math.round(Math.random()*255).toString(16).padStart(2, '0');
    text_color = '#'+txt_red+txt_green+txt_blue;
  }
  if(!button_color){button_color = 'rgb('+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+')';}
  scale = scale+" "+scale+" "+scale;
  
  // make the button do the thing
  AFRAME.registerComponent('community-hub-button-added-with-code', {
    init: function () {
      this.el.addEventListener('click', () => {
        openPage("banter://hub.bant.ing");
      })
    }
  });
  
  //add the button with the properties to the scene
  //create button
  let button = document.createElement('a-box');
  button.setAttribute('color', button_color);
  button.setAttribute('position', position);
  button.setAttribute('rotation', rotation);
  button.setAttribute('scale', scale);
  button.setAttribute('depth', '0.05');
  button.setAttribute('width', '0.77');
  button.setAttribute('height', '0.5');
  button.setAttribute('sq-collider', true);
  button.setAttribute('sq-interactable', true);
  button.setAttribute('community-hub-button-added-with-code', true);
  // create text
  let text = document.createElement('a-text');
  text.setAttribute('color', text_color);
  text.setAttribute('position', '0 0 0.03');
  text.setAttribute('value', 'Lunar\'s\nCommunity\nHub');
  text.setAttribute('scale', '0.69 0.69 0.69');
  text.setAttribute('align', 'center');
  // parent the text to the button and add it to the scene (if a scene exists)
  button.appendChild(text);
  let scene = document.querySelector('a-scene');
  if(scene){scene.appendChild(button);} else{console.warn("Community Hub Button: a-scene tag not found!");}
});