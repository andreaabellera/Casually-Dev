<script>
    export let title = "Collection of Artworks"
    export let image = ""
    export let adjust = "0 0"
    import artData from '../content/artifacts.yml' 

    // Play banner animation upon mouse enter
    function play(){
        let img = document.getElementById("img-ctr")
        let title = document.getElementById("title-text")
        let grad = document.getElementById("grad")
        let id1 = setInterval(play, 40)
        let delay = 0
        function play() {
            if(delay < 11){
                img.style.filter = "brightness(" + delay*0.1 + ")"
                title.style.opacity = "0%"
                grad.style.height = "0%"
            }
            else if(delay >= 10 && delay < 18){
                title.style.opacity = (delay-8) + "0%"
                title.style.top = (72-delay-8) + "%"
                grad.style.height = (delay-10) + "0%"
            }
            else
                clearInterval(id1)
            delay += 1
        }
    }

    function reset(){
        let title = document.getElementById("title-text")
        let id1 = setInterval(reset, 40)
        let delay = 0
        function reset() {
            if(delay < 11){
                title.style.opacity = (10 - delay) + "%"
                title.style.top = (50 + 2*delay) + "%"
            }
            else
                clearInterval(id1)
            delay += 1
        }
    }

    // Get art data
    let collections = artData.collections
    let rng = Math.floor(Math.random() * collections.length)
    let collectionTitle = collections[rng].title
    let currI = 0
    let feats = collections[rng].images
    let feat = feats[currI]
    
    // Change image every 5 seconds
    setInterval(changeFeat, 5000)
    function changeFeat(){
        if(currI < feats.length){
            feat = feats[currI]
            currI++
        }
        else
            currI = 0
    }

    $: title = feat.title
    $: image = feat.image
    $: adjust = feat.adjust

</script>

<a id="frame" href="/galerie">
    <div class="gallery-feat-ctr" on:mouseenter={play} on:focus={play} on:mouseleave={reset}>
        <div class="original-text syncopate"> Featuring original artworks from <b>{collectionTitle}</b> </div>
        <div id="title-text" class="laBelleAurore"> {title} </div>
        <div class="view-text lancelot"> view gallery </div>
        <div id="grad"></div>
        <div id="img-ctr" style="background-image:url({image}); background-position: {adjust};"></div>
    </div>
</a>
<span class="imageAnimation titleTextAnimation gradAnimation">
    <script>
        // Detect mobile
		if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))){
        document.getElementById("title-text").style.opacity = "90%"
        document.getElementById("title-text").style.top = "50%"
    }
    </script>
</span>

<style>
    #frame{
        border: 40px groove black;
        box-shadow: 0.5em 0.5em 1em rgba(0,0,0,0.2);
    }

    .gallery-feat-ctr {
        position: relative;
        background-color: var(--bark);
        height: 70vh;
        width: 100%;
        cursor: url(https://ipfs.io/ipfs/bafybeiaamj5yfttqkvs5mx5jre4t43d5syiclw6b4bhjuykpw3d7c4gch4), pointer;
    }

    .gallery-feat-ctr:hover {
        opacity: 96%;
        transition: 0.15s;
    }

    #img-ctr{
        position: absolute;
        z-index: 3;
        height: 100%;
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow: inset 1.5em 1em 6em rgba(0,0,0,0.5);
        animation: brighten 3s ease-in-out;
    }

    .original-text{
        position: absolute;
        z-index: 5;
        top: 1em;
        left: 1em;
        font-size: 1.2em;
        color: var(--oyster);
        font-weight: 400;
        background-color: var(--ink);
        padding: 6px;
    }

    #title-text{
        position: absolute;
        z-index: 6;
        width: 100%;
        top: 70;
        left: 70%;
        transform: translate(-50%, -30%);
        font-size: 6.5em;
        color: var(--oyster);
        opacity: 0%;
    }

    .view-text{
        position: absolute;
        z-index: 7;
        bottom: 1em;
        right: 25vw;
        font-size: 3em;
        color: var(--oysterDark);
        opacity: 80%;
        padding: 0.5em;
    }

    .view-text:hover{
        animation: mark 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); 
    }

    #grad{
        position: absolute;
        z-index: 4;
        bottom: 0;
        height: 90%;
        width: 100%;
        background-image: linear-gradient(to top, black, rgba(0,0,0,0));
    }

    @keyframes mark{
        0%{
            background-image: linear-gradient(to right, var(--passione) 5%, rgba(0,0,0,0) 5%, rgba(0,0,0,0));
        }
        10%{
            background-image: linear-gradient(to right, var(--passione) 10%, rgba(0,0,0,0) 10%, rgba(0,0,0,0));
        }
        20%{
            background-image: linear-gradient(to right, var(--passione) 15%, rgba(0,0,0,0) 15%, rgba(0,0,0,0));
        }
        30%{
            background-image: linear-gradient(to right, var(--passione) 25%, rgba(0,0,0,0) 25%, rgba(0,0,0,0));
        }
        40%{
            background-image: linear-gradient(to right, var(--passione) 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0));
        }
        50%{
            background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0) 10%, var(--passione) 10%, var(--passione) 75%, rgba(0,0,0,0) 75%);
        }
        60%{
            background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0) 25%, var(--passione) 25%, var(--blossom), var(--passione) 90%, rgba(0,0,0,0) 90%);
        }
        70%{
            background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0) 50%, var(--passione) 50%, var(--blossom));
        }
        80%{
            background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0) 80%, var(--blossom) 80%, var(--blossom));
        }
        90%{
            background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0) 95%, var(--blossom) 95%, var(--blossom));
        }
        100%{
            background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0) 98%, var(--blossom) 98%, var(--blossom));
        }
    }

    @media (max-width: 1200px) {
        #title-text{
            font-size: 7em;
            left: 55%;
        }
    }

    @media (max-width: 600px) {
        .original-text{
            font-size: 0.8em;
            background-color: rgba(0,0,0,0);
        }

        #title-text{
            width: auto;
            font-size: 2.7em;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
        }

        .view-text{
            font-size: 1.5em;
            bottom: 3em;
            transform: translateY(1.5em);
        }
    }

</style>