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

<a id="frame" href="/galerie" aria-label="Visit Gallery">
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
		if (globalThis.isMobile){
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
        cursor: url(https://4everland.io/ipfs/bafybeiaamj5yfttqkvs5mx5jre4t43d5syiclw6b4bhjuykpw3d7c4gch4), pointer;
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
        #frame{
            border: 20px groove black;
        }

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