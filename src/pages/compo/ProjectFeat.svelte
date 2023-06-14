<script>
    import Hippo from './art/Hippo.svelte'
    import Bison from './art/Bison.svelte'

    /* Attributions
    <a href='https://www.freepik.com/vectors/flat-nature'>Flat nature vector created by freepik - www.freepik.com</a>
    https://www.freepik.com/free-vector/organic-flat-jungle-background_13839952.htm#query=zoo&position=0&from_view=search
    <a href='https://www.freepik.com/vectors/jungle'>Jungle vector created by freepik - www.freepik.com</a>
    https://www.freepik.com/free-vector/detailed-jungle-background_13859419.htm#query=zoo&position=15&from_view=search
    <a href='https://www.freepik.com/vectors/lake'>Lake vector created by upklyak - www.freepik.com</a>
    https://www.freepik.com/free-vector/summer-landscape-with-green-fields-lake-rocks_24857483.htm#query=river&position=48&from_view=search
    */

    let images = [
        "https://storageapi.fleek.co/4ce00652-7eee-4e30-ba5f-e84651fedf6e-bucket/5371964.jpg",
        "https://storageapi.fleek.co/4ce00652-7eee-4e30-ba5f-e84651fedf6e-bucket/5386360.jpg",
        "https://dweb.link/ipfs/bafybeibvafxs5dv4dhljmvii6ckh57whnh643qrkcphgwfxoglyvl6vbx4"
    ]

    // Switch between images
    let curr = 0;
    setInterval(() => {
        curr = (curr + 1) % images.length
    }, 4000);
    
    $: image = images[curr]

</script>

<div class="project-feat-ctr" style="background-image:url({image});" aria-label="Promotional banner for Casually CSS">
    <div class="title-ctr">
        <div class="title-text"> Casually CSS </div>
        <div class="title-text"> Casually CSS </div>
        <a href="https://andreaabellera.github.io/Casually-CSS" aria-label="Visit Casually CSS art gallery">
            <div class="gallery-btn"><span> See the art gallery </span></div>
        </a>
        <a href="https://github.com/andreaabellera/Casually-CSS" aria-label="Visit Casually CSS Github">
            <div class="repo-btn"><span> Visit the Github repo </span></div>
        </a>
    </div>
    <div class="hippo-ctr" role="group" aria-label="Hippo HTML">
        <Hippo />
    </div>
    <div class="bison-ctr" role="group" aria-label="Bison HTML">
        <Bison />
    </div>
</div>

<style>
    .project-feat-ctr {
        position: relative;
        height: 80vh;
        width: 100%;
        cursor: url(https://dweb.link/ipfs/bafybeicuryldiwjiv5qynwnswb6qxv2lujyxvcv3oodzrbegtq247jubvm), pointer;
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow: inset 1.5em 1em 6em rgba(0,0,0,0.6);
    }

    .project-feat-ctr:hover {
        opacity: 96%;
        transition: 0.15s;
    }

    .title-ctr {
        position: absolute;
        z-index: 5;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: auto auto;
        grid-row-gap: 1.2em;
        grid-column-gap: 0.8em;
    }

    .title-text{
        font-family: 'Fredoka One', cursive;
        font-size: 6em;
        color: white;
        grid-column: 1/3;
        grid-row: 1/2;
        text-shadow: -6px 6px 0 #3E8DAA;
        text-align: center;
    }

    .title-text:nth-child(2) {
        z-index: 6;
        text-shadow: 0.03em 0.05em 0.1em rgba(0,0,0,0.4);
    }

    .gallery-btn, .repo-btn{
        font-family: 'Work Sans', sans-serif;
        font-size: 1.5em;
        color: white;
        background-color: crimson;
        padding: 0.5em 1em 0.5em 1em;
        border-radius: 2em;
        text-align: center;
        border: 0.1em solid firebrick;
        border-right-style: none;
        border-top-style: none;
    }

    .hippo-ctr{
        position: absolute;
        z-index: 4;
        left: 1em;
        bottom: 1em;
    }

    .bison-ctr{
        position: absolute;
        z-index: 4;
        right: 1em;
        bottom: 1em;
        transform: rotateY(180deg);
    }

    a:hover{
        text-decoration: none;
        filter: brightness(0.95);
        transition: 0.1s;
        transform: translate(-2px, 2px);
    }

    @media (max-width: 1200px) {
        .title-text{
            font-size: 5em;
        }
        .gallery-btn, .repo-btn{
            font-size: 1em;
            padding: 0.75em 1em 0.75em 1em;
            border-width: 0.05em;
            box-shadow: 0.05em 0.15em 0.5em rgba(0,0,0,0.3);
        }

        .bison-ctr{
            transform: scale(0.7) rotateY(180deg);
            right: 0;
        }

        .hippo-ctr{
            transform: scale(0.7);
            left: 0;
        }
    }

    @media (max-width: 600px) {
        .title-ctr{
            display: flex;
            flex-direction: column;
            top: 32%;
        }

        .title-text:nth-child(2) {
            display: none;
        }
        .title-ctr div{
            margin-bottom: 0.2em;
        }
        
        .gallery-btn, .repo-btn{
            background-color: rgba(0, 0, 0, 0.25);
            border-color: var(--ink);
        }

        .title-text{
            font-size: 4em;
        }

        .bison-ctr{
            transform: scale(0.45) translate(40%, 50%);
            right: 0;
            bottom: 0;
        }

        .hippo-ctr{
            display: none;
        }
    }
</style>