<script>
    export let title = "Collection Name";
    export let images = "No images provided";

    
</script>

<div id="collectionCtr">
    <div id="collectionInner">
        <div id="heading" class="taviraj">
            {title}
        </div>
    
        <div id="images-array">
            {#each images as image}
                <div class="image-ctr">
                    <img src={image.image} alt={image.info} />
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    #collectionCtr {
        height: max-content;
        min-height: 30vh;
        width: 100%;
        display: grid;
        justify-content: center;
        align-items: center;
        padding-bottom: 12vh;
    }

    #collectionInner{
        width: 80vw;
        text-align: left;
    }

    #heading {
        color: var(--coffee);
        font-size: 2.7em;
    }

    #images-array {
        display: flex;
        flex-wrap: wrap;
        margin-top: 5vh;
        justify-content: center;
    }

    .image-ctr{
        height: 45vh;
        width: max-content;
        margin: 3px;
    }

    .image-ctr:hover{
        animation: up 0.8s ease-in-out;
        z-index: 4;
        box-shadow: 0 0 0.5em 0.1em var(--chartreuse);
    }

    .image-ctr img{
        width: 100%;
        height: 100%;
    }

    @keyframes up{
        0%{
            transform: translateY(0);
        }
        50%{
            transform: translateY(-0.6em);
        }
        100%{
            transform: translateY(0);
        }
    }

    @media (max-width: 700px) {
        .image-ctr{
            height: max-content;
            width: 100%;
            margin: 2px;
        }

        #heading{
            font-size: 1.8em; 
        }
    }
</style>