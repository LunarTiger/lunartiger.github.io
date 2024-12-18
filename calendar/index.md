<section><div class="encase">
    <noscript><h2 style="color:#b00;">it's like 2012, just turn on javascript already</h2></noscript>
    <p style="color:#be0000">i work Monday-Thursday 13:00-21:30 UTC</p>
    <noscript><p style="color:#ff6900">[calendar goes here]</p></noscript>
	<p id="calendar-embed"></p>
    <div class="holder center">
		<nav>
			<ul>
				<li><a href="https://calendar.google.com/calendar/u/0/r?cid=lunartiger69@gmail.com" target="_blank">My Events</a></li>
				<li><a href="https://calendar.google.com/calendar/u/0/r?cid=c_e994jnd1n0658bc9uukk4qhs28@group.calendar.google.com" target="_blank">Solstice + Equinox</a></li>
				<li><a href="https://calendar.google.com/calendar/u/0/r?cid=2c58da0071e1f44b195d2ace1f47d8738594bc4cef301231e348cb037ebb9e73@group.calendar.google.com" target="_blank">Satanic Holidays</a></li>
                <li><a href="https://calendar.google.com/calendar/u/0/r?cid=ht3jlfaac5lfd6263ulfh4tql8@group.calendar.google.com" target="_blank">Moon Phases</a></li>
			</ul>
		</nav>
	</div>
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