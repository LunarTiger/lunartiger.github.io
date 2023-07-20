let website = [
  {href:"https://lunartiger.github.io", name:"home"},
  {href:"https://https://lunartiger.github.io/contact", name:"contact"},
  {href:"https://https://lunartiger.github.io/projects", name:"projects"},
  {href:"https://lunartiger.github.io/about", name:"about"},
];

// Setup an aframe component to handle clicking on the box to create and destroy portals
AFRAME.registerComponent('site-navigation', {
  init: function () {
    this.el.addEventListener('click', () => {
      // are the portals in the scene? if so remove them, otherwise add them
      let old_one = document.getElementById('site-portals');
      if(old_one) {
        old_one.parentElement.removeChild(old_one);
      }
      else {
        // create a new entity to contain the portals and make destruction easier                
        let new_one = document.createElement('a-entity'); new_one.id = 'site-portals'; new_one.setAttribute('position', '1.5 -1.12 0.83');
        // loop through and create the portals
        for (let i = 0; i < website.length; i++) {
          // make a portal for each url in the website array
          let this_portal = document.createElement('a-link'); this_portal.setAttribute('position', (i*2)+' 0 0'); this_portal.setAttribute('href', website[i].href);
          //make labels for the portals
          let box = document.createElement('a-box');
          box.setAttribute('color', '#000');
          box.setAttribute('position', '0 2 1');
          box.setAttribute('rotation', '270 0 0');
          box.setAttribute('depth', '0.05');
          box.setAttribute('width', '1.42');
          box.setAttribute('height', '0.3');
          // create text
          let text = document.createElement('a-text');
          text.setAttribute('color', '#0ff');
          text.setAttribute('position', '0 0.01 0.06');
          text.setAttribute('value', website[i].name);
          text.setAttribute('scale', '0.5 1 0.5');
          text.setAttribute('align', 'center');
          // add the portal to new_one
          box.appendChild(text);
          this_portal.appendChild(box);
          new_one.appendChild(this_portal);
        }
        // add new_one to the portal-toggle button
        document.getElementById('site-navigation').appendChild(new_one);
      }
    })
  }
});