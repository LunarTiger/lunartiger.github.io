addEventListener("DOMContentLoaded", () => {if(!!window.isBanter){
  const website = [
    {href:"https://lunartiger.github.io", name:"home"},
    {href:"https://lunartiger.github.io/contact", name:"contact"},
    {href:"https://lunartiger.github.io/projects", name:"projects"},
    {href:"https://lunartiger.github.io/about", name:"about"},
  ];
  var site_wait = false;
  // Setup an aframe component to handle clicking on the box to create and destroy portals
  AFRAME.registerComponent('site-navigation', {
    init: function () {
      this.el.addEventListener('click', () => {
        // if throttled, ignore the click
        if (site_wait) return;
        site_wait = true;
        const thisEl = this.el
        thisEl.setAttribute('color', '#690000');
        
        // are the portals in the scene? if so remove them, otherwise add them
        let old_one = document.getElementById('site-portals');
        if(old_one) {
          let old_portals = old_one.children;
          if(old_portals) {
            for (let i = 0; i < old_portals.length; i++){
              old_portals[i].parentElement.removeChild(old_portals[i]);
            }
            old_one.parentElement.removeChild(old_one);
          }
        }
        else {
          // create a new entity to contain the portals and make destruction easier                
          let new_one = document.createElement('a-entity'); new_one.id = 'site-portals'; new_one.setAttribute('position', '1.5 -1.12 0.83');
          // loop through and create the portals
          for (let i = 0; i < website.length; i++) {
            // make a portal for each url in the website array
            let this_portal = document.createElement('a-link'); this_portal.setAttribute('position', (i*2)+' 0 0'); this_portal.setAttribute('href', website[i].href);
            // make labels for the portals
            let this_plane = document.createElement('a-plane');
            this_plane.setAttribute('color', '#000');
            this_plane.setAttribute('position', (i*2)+' -0.24 0.3');
            this_plane.setAttribute('rotation', '270 0 0');
            this_plane.setAttribute('width', '1.42');
            this_plane.setAttribute('height', '0.3');
            //box.setAttribute('depth', '0.05');
            // create text
            let this_text = document.createElement('a-text');
            this_text.setAttribute('color', '#0ff');
            this_text.setAttribute('position', '0 0 0.01');
            this_text.setAttribute('value', website[i].name);
            this_text.setAttribute('scale', '0.5 1 0.5');
            this_text.setAttribute('align', 'center');
            // add the things to new_one
            this_plane.appendChild(this_text);
            new_one.appendChild(this_plane);
            new_one.appendChild(this_portal);
          }
          // add new_one to the portal-toggle button
          document.getElementById('site-navigation').appendChild(new_one);
        }
        
        // ignore any future requests for the next 3 seconds
        setTimeout(function () {
          thisEl.setAttribute('color', '#002100');
          site_wait = false;
        }, 3000);
      })
    }
  });
}});