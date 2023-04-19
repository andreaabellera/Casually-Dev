<script>
    export let title = "Collection Name";
    export let images = "No images provided";

    
</script>

<div id="collectionCtr">
    <div id="collectionInner">
        <h2 id="heading" class="taviraj">
            {title}
        </h2>
    
        <div id="images-array">
            {#each images as image}
                <a class="image-ctr" href={image.image}>
                    <img src={image.image} alt={image.info} />
                    <div class="overlay">
                        <div class="title ptSans">{image.title}</div>
                        <div class="year gentiumBasic">{image.year}</div>
                        <div class="info ptSans">{image.info}</div>
                    </div>
                </a>
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
        font-weight: 400;
    }

    #images-array {
        display: flex;
        flex-wrap: wrap;
        margin-top: 5vh;
        justify-content: center;
    }

    .image-ctr{
        position: relative;
        height: 45vh;
        width: max-content;
        margin: 3px;
    }

    .image-ctr img{
        width: 100%;
        height: inherit;
    }

    .overlay{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        height: 100%;
        width: 100%;
        background-color: rgba(62, 62, 62, 0.85);
        opacity: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .overlay:hover{
        transition: 0.4s;
        opacity: 1;
        box-shadow: 0 0 0.8em 0.3em var(--chartreuse);
    }

    .title{
        font-size: 1.5em;
        margin: 0 1.2em 0 1.2em;
        font-weight: bold;
    }

    .year{
        font-size: 0.9em;
        font-style: italic;
        margin-bottom: 1em;
        color: var(--oysterDark);
    }

    .info{
        font-size: 0.8em;
        margin: 0 1.2em 0 1.2em;
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