$(document).ready(function(){
  $( "p.check-hub" ).each(function () {
    var pobj = $(this)
    var HOST = pobj.children( "kbd" ).text();
    var PORT = pobj.children( "kbd" ).attr('data-port');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        pobj.html(this.responseText);
        pobj.removeAttr("Class");
      };
      if (this.readyState == 4 && this.status != 200) {
        if(PORT == 3700){
          pobj.html("<kbd>" + HOST + "</kbd> could not be checked.");
        } else {
          pobj.html("<kbd>" + HOST + ":" + PORT + "</kbd> could not be checked.");
        }
        console.log(this.status);
        pobj.removeAttr("Class");
      };
    };
    xhttp.open("POST", "checkPort.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    if (PORT == 3700){
      xhttp.send("HOST=" + HOST + "&PORT=" + PORT);
    } else {
      xhttp.send("HOST=" + HOST + "&PORT=" + PORT + "&DIFF=true");
    };
  });
});

$(document).ready(function(){
  $( "button[type=button][name=check-server]" ).on( "click", function () {
    var pobj = $( "p#check-server" )
    var HOST = $( "input[type=text][name=server-host]" ).val();
    var PORT = $( "input[type=text][name=server-port]" ).val();
    console.log('HOST:'+HOST);
    console.log(PORT);
    if ( HOST && PORT ){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          pobj.html(this.responseText);
          pobj.removeAttr("Class");
        };
        if (this.readyState == 4 && this.status != 200) {
          if(PORT == 3700){
            pobj.html("<kbd>" + HOST + "</kbd> could not be checked.");
          } else {
            pobj.html("<kbd>" + HOST + ":" + PORT + "</kbd> could not be checked.");
          }
          console.log(this.status);
          pobj.removeAttr("Class");
        };
      };
      xhttp.open("POST", "checkPort.php", true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      if (PORT == 3701){
        xhttp.send("HOST=" + HOST + "&PORT=" + PORT);
      } else {
        xhttp.send("HOST=" + HOST + "&PORT=" + PORT + "&DIFF=true");
      };
    } else {
      pobj.html('Please fill out both the Hub IP and Port.');
    };
  });
});