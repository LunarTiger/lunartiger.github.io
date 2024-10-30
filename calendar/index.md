<section><div class="encase">
    <noscript><h2 style="color:#b00;">it's like 2012, just turn on javascript already</h2><p style="color:#ff6900">[calendar goes here]</p></noscript>
	<p id="calendar-embed"></p>
</div></section>
<script>
  addEventListener("DOMContentLoaded", ()=>{
    if(!window.isBanter){
      /* embed the calendar */
      const calP = document.getElementById('calendar-embed'), calIframe = document.createElement('iframe');
      if(!!calP){
        setAttributes(calIframe, {width:'769', height:'569', style:'border-width:0; max-width:100%;', frameborder:'0', scrolling:'no', src:"https://calendar.google.com/calendar/embed?height=569&wkst=2&ctz=UTC&showPrint=0&title=Rev.%20Lunar's%20Calendar&src=bHVuYXJ0aWdlcjY5QGdtYWlsLmNvbQ&src=MmM1OGRhMDA3MWUxZjQ0YjE5NWQyYWNlMWY0N2Q4NzM4NTk0YmM0Y2VmMzAxMjMxZTM0OGNiMDM3ZWJiOWU3M0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=aHQzamxmYWFjNWxmZDYyNjN1bGZoNHRxbDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Y19lOTk0am5kMW4wNjU4YmM5dXVrazRxaHMyOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%230B8043&color=%23E67C73&color=%23616161&color=%23E67C73"});
        calP.appendChild(calIframe);
      }
    }
    function setAttributes(el, attrs){Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key]));}
  })
</script>
<script>(()=>{const a = document.getElementById('navcalendar'); if(!!a){a.style.backgroundColor = "#077"};})();</script>