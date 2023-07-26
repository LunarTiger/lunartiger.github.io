let spaces = [
  "https://lunar-test.glitch.me",
  "https://sq-wintersport-resort.glitch.me",
  "https://slipstream.glitch.me",
  "https://bant-island-night.glitch.me",
  "https://high-rise-bant.glitch.me",
  "https://benvr.co.uk/banter/toyhouse",
  "https://iss-interior.glitch.me" ,
  "https://ai-tour.glitch.me",
  "https://not-recroom.glitch.me"
];
var wait = false;

// Setup an aframe component to handle clicking on the box to create and destroy portals
AFRAME.registerComponent('portal-toggle', {
  init: function () {
    this.el.addEventListener('click', () => {
      // if throttled, ignore the click
      if (wait) return;

      // are the portals in the scene? if so remove them, otherwise add them
      let old_one = document.getElementById('space-portals');
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
        let new_one = document.createElement('a-entity'); new_one.id = 'space-portals'; new_one.setAttribute('position', '1.5 -1.12 0.83');
        // loop through and create the portals
        for (let i = 0; i < spaces.length; i++) {
          // make a portal for each url in the spaces array
          let this_portal = document.createElement('a-link'); this_portal.setAttribute('position', (i*2)+' 0 0'); this_portal.setAttribute('href', spaces[i]);
          // add the portal to new_one
          new_one.appendChild(this_portal);
        }
        // add new_one to the portal-toggle button
        document.getElementById('portal-toggle').appendChild(new_one);
      }

      // ignore any future requests for the next 3 seconds
      wait = true;
      setTimeout(function () {
        wait = false;
      }, 3000);
    })
  }
});