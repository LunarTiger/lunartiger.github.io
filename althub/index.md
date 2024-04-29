<section>
    <script>
        addEventListener("DOMContentLoaded", async() => {
            const redirectURL = 'sq-community.glitch.me';
            if(window.isBanter){
                window.loadDoneCallback = async() => {
                    lockPlayer();
                    openPage('banter://'+redirectURL);
                }
            }else{
                window.location.replace('https://'+redirectURL);
            }
        });
    </script>
</section>